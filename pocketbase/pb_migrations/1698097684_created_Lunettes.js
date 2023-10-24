/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "twyit85hcli8q88",
    "created": "2023-10-23 21:48:04.423Z",
    "updated": "2023-10-23 21:48:04.423Z",
    "name": "Lunettes",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "stjzo1kz",
        "name": "libelle_materiaux",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("twyit85hcli8q88");

  return dao.deleteCollection(collection);
})
