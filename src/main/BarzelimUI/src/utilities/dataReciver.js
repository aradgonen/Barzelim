const deviceTypes = require('./deviceTypes')
const networks = require('./networks')

const dataReciver = {
    getDevices : async () => {
        let devicesRaw
        let devices = []

        try {
        devicesRaw = await fetch('/api/devices')
        devicesRaw = await devicesRaw.json()
        console.log(deviceTypes)
        deviceTypes.forEach(type => {
            devicesRaw['_embedded'][type].forEach(rawDevice => {
                 rawDevice.subType = type;
                 let deviceID = rawDevice._links.self.href.split('//')[rawDevice._links.self.href.split('//').length -1]
                 rawDevice.deviceID = deviceID.split('/')[deviceID.split('/').length -1]
            });
            devices = devices.concat(devicesRaw['_embedded'][type])
        })
    } catch {
        console.error();
    }

    console.log('in getDevices!')
    console.log(devicesRaw)
    console.log(devices)
    return (devices)
    },

    getRacks : async () => {

        let racks
        try {
            racks = await (await fetch('/api/racks')).json()
            racks = racks['_embedded']['racks']
            console.log('racks')
            console.log(racks)
        } catch {
            console.error()
        }

        return (racks)
    },

    // TODO:
    // create dc object that copies the dc.js object
    // Map each rack to a rack in the new dc object
    // Map devices into the rack based on the racks id of devices array
    // Give Racks and devices the correct network by networkID

    // initialize all the empty U (crash because of infinite loop)
    // finish creating the dc send back and done!
    // also - make the mudal values generate from the valus of the device itself! (not predetermide)
    createDc : async (racks = [], devices = []) => {
        let dc = []
        let temporaryRack = {}
        racks.forEach(rack => {
            temporaryRack.rack_id = rack.number
            temporaryRack.network = networks[rack.networkId];
            
            temporaryRack.data = []
            for (let i = 0; i < rack.size; i++) {
                temporaryRack.data.push({uNumber:i})
            }
            console.log(`data size ${temporaryRack.data.length}`)
            
            rack.content.forEach(deviceID => {
                let device = {}
                devices.forEach(deviceInArray => {
                    if (deviceInArray.deviceID === deviceID) { device = deviceInArray}
                });
                temporaryRack.data[device.uNumber] = device
                console.log('device ID!' + device)
            });
            console.log('temporaryRack')
            console.log(temporaryRack)
            console.log(rack.number)

            dc.push(temporaryRack)
        });

        return (dc)
    },
    
    getDeviceById : async (id = "", devices = []) => {
        devices.forEach(device => {
            if (device.deviceID === id) { return (device)}
        });
    }
}

export default dataReciver;