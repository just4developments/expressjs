# ExpressJS Core
Fast, easy and flexiable to implement and maintaince project base on expressJS.

## Feature:
1. Create project base on expressJS
2. Auto generate APIs layer (Controller, service, database (mongo: available, others: Implement db interface to customize))
3. Optimize FileUpload and resize image via configuration file

Config API Generation at lib/generate/initial.js 

```sh
module.exports = module.exports = {
    auth: "utils.auth(`${global.appconfig.name}>${table}`, '${action}')",
    tables: {
        project: {
            _id: GenType.Key(GenType.Uuid),
            name: GenType.String,
            status: GenType.Number(0),  
            plugins: GenType.Object({
                oauthv2: GenType.Object({
                    _id: GenType.Uuid,
                    single_mode: GenType.Boolean,
                    session_expired: GenType.Number
                })
            }),          
            roles: GenType.Array,
            user: GenType.Array({
                username: GenType.String,
                password: GenType.String(null)
            }, null),
            abc: GenType.Array({
                username: GenType.String,
                password: GenType.String(null)
            }, [{
                username: 'thanh'
            }]),
            image: GenType.File({
                saveTo: '`assets/images`', // Upload file to physical path
                maxCount: 1, // Upload multiple file. If maxCount > 1 ? Array : Path image file
                isFull: false, // isFull ? details object image : only path
                returnPath: "`/images/${filename}`", // Path get after upload which is inserted into database (It's web path not physical path)
                limits: 10000, // limit file size
                resize: Native("global.appconfig.app.imageResize.product") // Auto resize image base on config in src/appconfig.js
            }),
            created_at: GenType.Date('auto-insert'),
            updated_at: GenType.Date('auto-insert|auto-update')
        }
    },
    outdir: 'src'
};
```
In that: 
```sh
    GenType.Key: _id mongo which be auto generated
    GenType.String: required
    GenType.String(defaultValue): String with default value
    GenType.Number: same GenType.String
    GenType.Date: required
    GenType.Date('now'): Default is today (= new Date())
    GenType.Date('auto-insert'): Default is today (= new Date()) when inserting
    GenType.Date('auto-update'): Default is today (= new Date()) when updating
    GenType.Date('auto-insert|auto-update'): Default is today (= new Date()) when inserting & updating
    GenType.Date(year, month, day, hh, mm, ss): (same new Date() in javascript: Oct = 9)
    GenType.Object: same GenType.String
    GenType.Array: same GenType.String
    GenType.File({
        saveTo: '`assets/images`', // Upload file to physical path
        maxCount: 1, // Upload multiple file. If maxCount > 1 ? Array : Path image file
        isFull: false, // isFull ? details object image : only path
        returnPath: "`/images/${filename}`", // Path get after upload which is inserted into database (It's web path not physical path)
        limits: 10000, // limit file size
        resize: Native("global.appconfig.app.imageResize.product") // Auto resize image base on config in src/appconfig.js
    })
```
Global.appconfig for resize image
```sh
  app: {
    imageResize: {
        product: [
            {w: -1000 }, // Auto resize origin when width > 1000. If width < 1000 do nothing
            {w: 32, h: 32, ext: 'thumb'},
            {w: 224, h: 200, ext: 'list.pc'},
            {w: 358, h: 200, ext: 'list.tab'},
            {w: 270, h: 200, ext: 'list.mob'}
        ]
    }
  }
```

Generate APIs from lib/generate/initial.js config file
```sh
npm run gen
```

## Installation
1. Use file uploading 
```sh
npm install fs-path multer --save
```

2. Use image resizing
```sh
npm install jimp --save
```