import Realm from 'realm';
import CategorySchema from '../schemas/CotegorySchema/'
import EntrySchema from '../schemas/EntrySchema';

export const getRealm = async () => {
  const realm = await Realm.open({
    schema: [CategorySchema, EntrySchema],
    schemaVersion: 3,
  });

  return realm;
};
