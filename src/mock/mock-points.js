// $======================== mockPoints ========================$ //

import { getRandomArrayItem } from '../util';

const mockPoints = [
  {
    id: '16b7a5f0-de3e-47c3-8ffd-2e2fc91884ac',
    basePrice: 8579,
    dateFrom: '2024-10-24T06:37:09.899Z',
    dateTo: '2024-10-24T13:03:09.899Z',
    destination: '039f3178-3015-46b2-a395-fa26efb2015c',
    isFavorite: true,
    offers: [],
    type: 'sightseeing'
  },
  {
    id: '82106653-195a-43a0-bb35-f12a0827de54',
    basePrice: 1294,
    dateFrom: '2024-10-25T18:41:09.899Z',
    dateTo: '2024-10-27T09:05:09.899Z',
    destination: '3a3146cf-f88f-4d1e-8bed-7eb6cef145c8',
    isFavorite: true,
    offers: [
      'dec3c29a-c5ad-4388-b49c-c1f1455f0d03',
      '2019ab0e-4e4e-4252-b9c0-d3a9f4db2923',
      'b2006f18-828a-47e7-8b36-48560d825b83'
    ],
    type: 'bus'
  },
  {
    id: 'e6c95ce7-801e-4a53-be7b-19d39cf3344b',
    basePrice: 1619,
    dateFrom: '2024-10-28T15:57:09.899Z',
    dateTo: '2024-10-29T03:09:09.899Z',
    destination: 'e2ddfcc3-a9b8-4db6-a811-a3828d2a829c',
    isFavorite: true,
    offers: [
      '71ae9618-d5a0-4d77-9d13-7f26805e176c'
    ],
    type: 'drive'
  },
  {
    id: '09ca028c-11dd-468f-a0fe-7a1fecf19f5e',
    basePrice: 6096,
    dateFrom: '2024-10-30T12:44:09.899Z',
    dateTo: '2024-11-01T12:11:09.899Z',
    destination: '7aa8ddd3-9ebe-45cf-8456-5377802ac252',
    isFavorite: false,
    offers: [
      'b8529b05-414e-414f-98c4-fc46a0a36ef8',
      'ac05e5bb-729e-41c4-b1cf-71087cd46806'
    ],
    type: 'flight'
  },
  {
    id: '3685074d-c267-43ac-a583-dff65c26a883',
    basePrice: 3295,
    dateFrom: '2024-11-03T06:31:09.899Z',
    dateTo: '2024-11-04T03:00:09.899Z',
    destination: '363aa35f-8cee-48da-9ff8-6d0d6c54d9b0',
    isFavorite: true,
    offers: [
      'fc347484-63f4-4b73-9dcd-805ad2192d1e',
      'f2c35098-c7cc-4870-81f8-24bbcbbd2eec',
      '0c3d09c7-3750-4ae0-89f0-b405e76ad1ed'
    ],
    type: 'train'
  },
  {
    id: 'd1ff4489-5616-4b36-af1d-464a44a323e1',
    basePrice: 3850,
    dateFrom: '2024-11-04T13:18:09.899Z',
    dateTo: '2024-11-06T11:45:09.899Z',
    destination: '5052c42d-c848-4f5a-bc0e-1c7a9159b55b',
    isFavorite: true,
    offers: [],
    type: 'drive'
  },
  {
    id: '560dcd83-2eaf-4cfa-b797-faf67786f572',
    basePrice: 9841,
    dateFrom: '2024-11-07T20:59:09.899Z',
    dateTo: '2024-11-08T03:18:09.899Z',
    destination: '363aa35f-8cee-48da-9ff8-6d0d6c54d9b0',
    isFavorite: false,
    offers: [],
    type: 'sightseeing'
  },
  {
    id: '9f9fa5af-26a6-40c7-9e3c-3bde16da2c73',
    basePrice: 5566,
    dateFrom: '2024-11-08T14:35:09.899Z',
    dateTo: '2024-11-09T18:25:09.899Z',
    destination: '238dfde9-12df-43f3-ae52-52145715e238',
    isFavorite: false,
    offers: [
      'c2eae7b6-f4af-4a00-a4fe-f8a34e275ed3',
      'b8529b05-414e-414f-98c4-fc46a0a36ef8',
      'ac05e5bb-729e-41c4-b1cf-71087cd46806'
    ],
    type: 'flight'
  },
  {
    id: '84007401-b1aa-4e7f-97b2-b6fdb98068ff',
    basePrice: 3925,
    dateFrom: '2024-11-10T07:54:09.899Z',
    dateTo: '2024-11-11T03:40:09.899Z',
    destination: '3a3146cf-f88f-4d1e-8bed-7eb6cef145c8',
    isFavorite: false,
    offers: [
      '954cc84d-7283-482a-8b23-67924764294f',
      '9e299604-2f87-45dc-95e9-1edbfd566ab1',
      '82528155-38b1-42dd-ba2d-93f78fec7c89'
    ],
    type: 'taxi'
  },
  {
    id: '18c874c3-b4ec-4c61-a44f-bb9521d58909',
    basePrice: 9639,
    dateFrom: '2024-11-11T21:56:09.899Z',
    dateTo: '2024-11-13T18:38:09.899Z',
    destination: 'e2ddfcc3-a9b8-4db6-a811-a3828d2a829c',
    isFavorite: false,
    offers: [
      '2019ab0e-4e4e-4252-b9c0-d3a9f4db2923',
      'b2006f18-828a-47e7-8b36-48560d825b83'
    ],
    type: 'bus'
  },
  {
    id: '4ce49a17-6509-46ed-8f1f-62a12685db94',
    basePrice: 6519,
    dateFrom: '2024-11-14T18:03:09.899Z',
    dateTo: '2024-11-16T14:40:09.899Z',
    destination: '5052c42d-c848-4f5a-bc0e-1c7a9159b55b',
    isFavorite: true,
    offers: [
      '71ae9618-d5a0-4d77-9d13-7f26805e176c'
    ],
    type: 'drive'
  },
  {
    id: 'eedd664c-f3cb-46b3-96dc-4077df870d07',
    basePrice: 2504,
    dateFrom: '2024-11-18T10:17:09.899Z',
    dateTo: '2024-11-20T01:42:09.899Z',
    destination: 'd01a72e9-087f-4837-a146-ba6a1709ac22',
    isFavorite: true,
    offers: [
      '207e3e47-7a57-4a7d-905b-5d560ec30d59'
    ],
    type: 'restaurant'
  },
  {
    id: '7e69c996-3f30-4b34-ae0d-72894203d1ff',
    basePrice: 2636,
    dateFrom: '2024-11-21T13:41:09.899Z',
    dateTo: '2024-11-22T19:07:09.899Z',
    destination: '579b75cd-c26b-43eb-a3f9-d153690db8b9',
    isFavorite: true,
    offers: [
      'fb921a7a-4c6b-4aa2-9059-77b60e347ece',
      '71ae9618-d5a0-4d77-9d13-7f26805e176c'
    ],
    type: 'drive'
  },
  {
    id: '2087c1dc-b518-41bd-b729-2e57cc60833c',
    basePrice: 7577,
    dateFrom: '2024-11-24T03:58:09.899Z',
    dateTo: '2024-11-24T18:52:09.899Z',
    destination: '579b75cd-c26b-43eb-a3f9-d153690db8b9',
    isFavorite: true,
    offers: [
      '954cc84d-7283-482a-8b23-67924764294f',
      '9e299604-2f87-45dc-95e9-1edbfd566ab1',
      '82528155-38b1-42dd-ba2d-93f78fec7c89'
    ],
    type: 'taxi'
  },
  {
    id: 'f1ae8ed9-84f3-4085-a922-30c906cb7da7',
    basePrice: 9617,
    dateFrom: '2024-11-26T07:48:09.899Z',
    dateTo: '2024-11-27T17:42:09.899Z',
    destination: '363aa35f-8cee-48da-9ff8-6d0d6c54d9b0',
    isFavorite: true,
    offers: [
      'fb921a7a-4c6b-4aa2-9059-77b60e347ece',
      '71ae9618-d5a0-4d77-9d13-7f26805e176c'
    ],
    type: 'drive'
  },
  {
    id: '52d2fd02-a9ad-4aa0-a20b-ecabd4089858',
    basePrice: 2211,
    dateFrom: '2024-11-28T01:29:09.899Z',
    dateTo: '2024-11-29T02:17:09.899Z',
    destination: '238dfde9-12df-43f3-ae52-52145715e238',
    isFavorite: false,
    offers: [
      'b8529b05-414e-414f-98c4-fc46a0a36ef8',
      'ac05e5bb-729e-41c4-b1cf-71087cd46806'
    ],
    type: 'flight'
  },
  {
    id: 'bd32f554-52e3-4fdd-b412-5244be467192',
    basePrice: 5769,
    dateFrom: '2024-11-29T10:56:09.899Z',
    dateTo: '2024-12-01T07:00:09.899Z',
    destination: '5052c42d-c848-4f5a-bc0e-1c7a9159b55b',
    isFavorite: true,
    offers: [
      '9f523857-6d81-489c-8ec3-41dc9c67c01d',
      '0416f625-1e61-4088-a7ea-b2f1f6769268',
      '954cc84d-7283-482a-8b23-67924764294f',
      '9e299604-2f87-45dc-95e9-1edbfd566ab1',
      '82528155-38b1-42dd-ba2d-93f78fec7c89'
    ],
    type: 'taxi'
  },
  {
    id: '01d169f0-aa1e-4895-a1a3-2bcab76e6d92',
    basePrice: 8717,
    dateFrom: '2024-12-01T20:10:09.899Z',
    dateTo: '2024-12-02T18:58:09.899Z',
    destination: '039f3178-3015-46b2-a395-fa26efb2015c',
    isFavorite: false,
    offers: [
      'b2006f18-828a-47e7-8b36-48560d825b83'
    ],
    type: 'bus'
  },
  {
    id: '9be203e8-ee2e-4a79-b12e-d8aeee2bf682',
    basePrice: 7400,
    dateFrom: '2024-12-04T07:15:09.899Z',
    dateTo: '2024-12-04T21:29:09.899Z',
    destination: 'd01a72e9-087f-4837-a146-ba6a1709ac22',
    isFavorite: true,
    offers: [
      'e71488f0-af79-4c1d-b864-cf07ce0d9ee4',
      '52ceefd8-2c4f-4620-9465-44ced8a5693c',
      'fbd3d2b4-1cf5-4b47-b210-c0e11f6f5b0b',
      'f30d0ade-6e37-4627-88e6-c6819e1730a6'
    ],
    type: 'check-in'
  },
  {
    id: '03df7454-514a-4f7d-b57e-f9f3598f5686',
    basePrice: 7898,
    dateFrom: '2024-12-05T11:49:09.899Z',
    dateTo: '2024-12-06T05:52:09.899Z',
    destination: '7aa8ddd3-9ebe-45cf-8456-5377802ac252',
    isFavorite: false,
    offers: [],
    type: 'flight'
  },
  {
    id: '8981a39f-8470-45d1-8ae7-6d8f2fd07663',
    basePrice: 4863,
    dateFrom: '2024-12-06T15:34:09.899Z',
    dateTo: '2024-12-07T01:25:09.899Z',
    destination: 'e2ddfcc3-a9b8-4db6-a811-a3828d2a829c',
    isFavorite: true,
    offers: [
      'fc347484-63f4-4b73-9dcd-805ad2192d1e',
      'f2c35098-c7cc-4870-81f8-24bbcbbd2eec',
      '0c3d09c7-3750-4ae0-89f0-b405e76ad1ed'
    ],
    type: 'train'
  },
  {
    id: '6ba5ed45-fded-4d7b-8e42-6dd69a8db188',
    basePrice: 4723,
    dateFrom: '2024-12-09T01:48:09.899Z',
    dateTo: '2024-12-10T07:43:09.899Z',
    destination: 'e2ddfcc3-a9b8-4db6-a811-a3828d2a829c',
    isFavorite: false,
    offers: [
      'fe102690-c3f7-4620-9eed-1be6e5515bb1',
      '98dc10ed-69b8-4829-811e-b8c89f220e90',
      '4859058d-caa6-4747-be06-c31841f6f8dd',
      '1807bf59-1021-41a2-a409-155962017348',
      '56b06cbf-bbef-45cc-bedf-04175e6e0d8f'
    ],
    type: 'ship'
  },
  {
    id: '5a0d0a2c-4649-4a8d-9bc0-f23f0f15b157',
    basePrice: 5216,
    dateFrom: '2024-12-11T15:29:09.899Z',
    dateTo: '2024-12-12T23:28:09.899Z',
    destination: '039f3178-3015-46b2-a395-fa26efb2015c',
    isFavorite: false,
    offers: [
      '954cc84d-7283-482a-8b23-67924764294f',
      '9e299604-2f87-45dc-95e9-1edbfd566ab1',
      '82528155-38b1-42dd-ba2d-93f78fec7c89'
    ],
    type: 'taxi'
  },
  {
    id: 'c531b83e-cd4a-45a4-9a98-28dbdec65f01',
    basePrice: 8413,
    dateFrom: '2024-12-14T16:23:09.899Z',
    dateTo: '2024-12-16T05:52:09.899Z',
    destination: '7aa8ddd3-9ebe-45cf-8456-5377802ac252',
    isFavorite: false,
    offers: [
      '71ae9618-d5a0-4d77-9d13-7f26805e176c'
    ],
    type: 'drive'
  },
  {
    id: '7e3a3885-f25c-49c8-b408-cb8fe8f46ac3',
    basePrice: 6061,
    dateFrom: '2024-12-17T03:51:09.899Z',
    dateTo: '2024-12-18T04:57:09.899Z',
    destination: 'd01a72e9-087f-4837-a146-ba6a1709ac22',
    isFavorite: false,
    offers: [
      'b2006f18-828a-47e7-8b36-48560d825b83'
    ],
    type: 'bus'
  }
];

const getRandomPoint = () => getRandomArrayItem(mockPoints);


export { mockPoints, getRandomPoint };
