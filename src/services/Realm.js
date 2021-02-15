import Realm from 'realm';

import EntrySchema from '../schemas/EntrySchema'
import CategorySchema from '../schemas/CotegorySchema'

export const getRealm = async () => {
  const realm = await Realm.open({
    schema: [CategorySchema, EntrySchema],
    schemaVersion: 2,
  });

  return realm;
};
