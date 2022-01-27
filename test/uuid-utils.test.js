import { UUIDUtils } from '../dist/motl.es';

test("UUIDUtils.uuid()", () => {
  const uid = UUIDUtils.uuid();
  expect(uid.length).toBe(36);
});

test("UUIDUtils.uuid32()", () => {
  const uid = UUIDUtils.uuid32();
  console.log('UUIDUtils.uuid32() ', uid);
  expect(uid.length).toBe(32);
});

