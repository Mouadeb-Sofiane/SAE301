/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("h6bw94yhzcnbdsu")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "b1f58vcc",
    "name": "id_users",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("h6bw94yhzcnbdsu")

  // remove
  collection.schema.removeField("b1f58vcc")

  return dao.saveCollection(collection)
})
