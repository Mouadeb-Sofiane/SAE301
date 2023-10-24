/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("twyit85hcli8q88")

  collection.name = "Materiaux"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("twyit85hcli8q88")

  collection.name = "Lunettes"

  return dao.saveCollection(collection)
})
