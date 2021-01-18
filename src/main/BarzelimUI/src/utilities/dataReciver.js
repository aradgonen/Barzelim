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
        let dc = racks.map(curRack =>{
            console.log()
            let curRackDevices = []
            let data = []
            let tempRackSize = curRack.size
            devices.map(device =>{
                if(curRack.name == device.rackNumber){
                    curRackDevices[device.unumber] = device   
                }
            })
            for (let i = 0; i<=curRack.size; i++){
                if (Object.keys(curRackDevices).includes(`${i}`)){
                    data[i] = curRackDevices[i]
                }
                else{
                    data[i] = {unumber:i}
                }
            }
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