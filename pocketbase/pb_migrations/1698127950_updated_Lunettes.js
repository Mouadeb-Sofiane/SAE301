/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("h6bw94yhzcnbdsu")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "sj2lzky5",
    "name": "type_verre",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("h6bw94yhzcnbdsu")

  // remove
  collection.schema.removeField("sj2lzky5")

  return dao.saveCollection(collection)
})
