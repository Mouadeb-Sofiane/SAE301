/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("h6bw94yhzcnbdsu")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "byenzqzk",
    "name": "type_verre",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("h6bw94yhzcnbdsu")

  // remove
  collection.schema.removeField("byenzqzk")

  return dao.saveCollection(collection)
})
