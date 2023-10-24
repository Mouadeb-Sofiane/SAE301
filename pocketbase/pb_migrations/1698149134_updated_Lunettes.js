/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("h6bw94yhzcnbdsu")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "w4hdcgpv",
    "name": "id_materiaux_verre",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "twyit85hcli8q88",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "b7oy2jl8",
    "name": "id_materiaux_cadre",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "twyit85hcli8q88",
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
  collection.schema.removeField("w4hdcgpv")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "b7oy2jl8",
    "name": "id_materiaux",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "twyit85hcli8q88",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
})
