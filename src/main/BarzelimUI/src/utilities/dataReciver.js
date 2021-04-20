const deviceTypes = require('./deviceTypes')
const networks = require('./networks')

const dataReciver = {
    getDevices : async () => {
        let devicesRaw
        let devices = []

    //     try {
    //     devicesRaw = await fetch('/api/barzelim/neo4j/devices')
    //     devicesRaw = await devicesRaw.json()
    //     console.log(deviceTypes)
    //     deviceTypes.forEach(type => {
    //         devicesRaw['_embedded'][type].forEach(rawDevice => {
    //              rawDevice.subType = type;
    //              let deviceID = rawDevice._links.self.href.split('//')[rawDevice._links.self.href.split('//').length -1]
    //              rawDevice.deviceID = deviceID.split('/')[deviceID.split('/').length -1]
    //         });
    //         devices = devices.concat(devicesRaw['_embedded'][type])
    //     })
    // } catch {
    //     console.error();
    // }
        try{
            devicesRaw = await fetch('/api/barzelim/devices')
            devicesRaw = await devicesRaw.json()
            console.log(devicesRaw)
            return devicesRaw
        }
        catch{
            console.error()
        }
    // console.log('in getDevices!')
    // console.log(devicesRaw)
    // console.log(devices)
    // return (devices)
    },

    getRacks : async () => {

        let racks
        try {
            racks = await (await fetch('/api/barzelim/racks')).json()
            // racks = racks['_embedded']['racks']
            console.log('racks')
            console.log(racks)
        } catch {
            console.error()
        }

        return (racks)
    },

    createDc : async (racks = [], devices = []) => {

        // for each rack in dc - insert the devices into the rack and then add an rack object to the dc object
        let dc = racks.map(curRack =>{
            let curRackDevices = []
            let data = []
            let tempRack = new Array(curRack.size)
            tempRack.fill('emptyCell',0,tempRack.length) //fill the temp array with empty data
            console.log("devices")
            console.log(devices)
            devices.forEach(device => {
                if(curRack.name === device.rackNumber){
                    //curRackDevices[device.unumber] = device
                    curRackDevices.push(device)
                }
            })
            curRackDevices.forEach(currentRackDevice => {
                // if (currentRackDevice.serialNumber === 'h5h5h65h76h5') {
                //     alert(`${currentRackDevice.serialNumber} ${currentRackDevice.name} ${currentRackDevice.size} ${curRack.name}`)
                // }
                // currentRackDevice.unumber - 1 because if the real u is X, the place in the array is x - 1 
                tempRack[currentRackDevice.unumber - 1] = {unumber:currentRackDevice.unumber - 1, data:currentRackDevice} //currentRackDevice //TODO: change the u data to this format : {unumber:currentRackDevice.unumber - 1, data:currentRackDevice}
                
                // starting on one U lower than the multiU device, Us will be occupied by the size of the device
                // if (currentRackDevice.size !== 1) {
                //     for (let occupiedIndex = currentRackDevice.unumber - 2; occupiedIndex <= currentRackDevice.unumber - currentRackDevice.size && occupiedIndex >= 0; occupiedIndex--) {
                //         tempRack[occupiedIndex] = 'extensionOfDevice'
                //         console.log(`extensionOfDevice in rack ${curRack.name}`)
                //     }
                // }
            })

            // fill the empty cells with the "empty" json
            for (let tempRackIndex = 0; tempRackIndex <= curRack.size; tempRackIndex++) {
                if (tempRack[tempRackIndex] === 'emptyCell') {
                    tempRack[tempRackIndex] = {unumber:tempRackIndex, data:{}}
                }
            }

            console.log(`Data array of ${curRack.name}`)
            console.log(tempRack)

            // let arr = [{1:1},{2:2},'extensionOfDevice', 'extensionOfDevice', {3:3}]
            // let spliceIndex2 = 0;
            // while (spliceIndex2 < arr.length) {
            //     if(arr[spliceIndex2] === 'extensionOfDevice') {
            //         let spliced = arr.splice(spliceIndex2, 1)
            //         console.log(`SPLICED!!!!!! ${curRack.name} + ${spliceIndex2}`)
            //         console.log(spliced)
            //         //alert(`${spliceIndex} in ${curRack.id}`)
            //     } else {
            //         // only advences the index if there wasn't a splice, because in case of splice - the index doesn't change
            //         // data: [{},{},"extensionOfDevice","extensionOfDevice", {}]
            //         // keys: (0, 1, 2, 3, 4)
            //         // after 1 splice:
            //         // data: [{},{}, "extensionOfDevice", {}]
            //         // keys: (0, 1, 2, 3)
            //         // key number 2 was spliced - so key 3 has become the new key 2 - the index doesn't need to advance when spliced
            //         spliceIndex2++
            //     }
            // }
            // console.log("spliced example")
            // console.log(arr)

            // let spliceIndex = 0;
            // while (spliceIndex < tempRack.length) {
            //     if(tempRack[spliceIndex] === 'extensionOfDevice') {
            //         let spliced = tempRack.splice(spliceIndex, 1)
            //         console.log(`SPLICED!!!!!! ${curRack.name} + ${spliceIndex}`)
            //         console.log(spliced)
            //         //alert(`${spliceIndex} in ${curRack.id}`)
            //     } else {
            //         // only advences the index if there wasn't a splice, because in case of splice - the index doesn't change
            //         // data: [{},{},"extensionOfDevice","extensionOfDevice", {}]
            //         // keys: (0, 1, 2, 3, 4)
            //         // after 1 splice:
            //         // data: [{},{}, "extensionOfDevice", {}]
            //         // keys: (0, 1, 2, 3)
            //         // key number 2 was spliced - so key 3 has become the new key 2 - the index doesn't need to advance when spliced
            //         spliceIndex++
            //     }
            // }
            
            data = tempRack;

            // for (let tempRackIndex = 0; tempRackIndex <= curRack.size; tempRackIndex++) {
            // console.log("curRackDevices")
            // console.log(curRackDevices)
            // for (let i = 0; i<=curRack.size; i++) {
            //     if (Object.keys(curRackDevices).includes(`${i}`)) {
            //         data[i] = curRackDevices[i]
            //     } else {
            //         data[i] = {unumber:i}
            //     }
            // }
            console.log(`creating rack ${curRack.id} with the data`);
            console.log(data);
            return {rack_id:curRack.name, data:data, network: curRack.networkId}
        })
        // let dc = []
        // let temporaryRack = {}
        // console.log(racks)
        // racks.forEach(rack => {
        //     temporaryRack.rack_id = rack.name
        //     // temporaryRack.network = networks[rack.networkId];
        //     temporaryRack.network = rack.networkId;
        //     temporaryRack.data = []
        //     for (let i = 0; i < rack.size; i++) {
        //         temporaryRack.data.push({unumber:i})
        //     }
        //     console.log(`data size ${temporaryRack.data.length}`)
            
        //     rack.content.forEach(deviceID => {
        //         let device = {}
        //         devices.forEach(deviceInArray => {
        //             if (deviceInArray.deviceID === deviceID) { device = deviceInArray}
        //         });
        //         temporaryRack.data[device.unumber - 1] = device // -1 so that the device in 1 will be in the index 0.
        //         console.log('device ID!' + device)
        //     });
        //     console.log('temporaryRack')
        //     console.log(temporaryRack)
        //     console.log(rack.name)

        //     dc.push(temporaryRack)
        //     temporaryRack = {}
        //     console.log(dc)
        // });
        // console.log(dc)
        return dc
    },
    
    getDeviceById : async (id = "", devices = []) => {
        devices.forEach(device => {
            if (device.deviceID === id) { return (device)}
        });
    }
}

export default dataReciver;