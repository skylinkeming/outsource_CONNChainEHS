export const SystemData = [
    {
        key: '0-0',
        title: '系統管理與設定',
        children: [
            { key: '0-0-0', title: '單位階層管理', children: [{ key: '0-0-0-1', title: '新增' }, { key: '0-0-0-2', title: '刪除' }, { key: '0-0-0-3', title: '修改' }] },
            { key: '0-0-1', title: '角色階層管理', },
            { key: '0-0-2', title: '功能群組管理', },
            { key: '0-0-3', title: '系統功能查詢', },
            { key: '0-0-4', title: '停止運作設定', },

        ],
    },
    {
        key: '1-0',
        title: '單位與人員管理',
        children: [
            { key: '1-0-1', title: '單位管理', },
            { key: '1-0-2', title: '區域管理', },
            { key: '1-0-3', title: '建築物管理', },
            { key: '1-0-4', title: '實驗室管理', },
            { key: '1-0-5', title: '人員管理', },
        ],
    },
    {
        key: '2-0',
        title: '簽核管理',
        children: [
            { key: '2-0-1', title: '化學品採購/異動', },
            { key: '2-0-2', title: '實驗室申請/異動', },
        ],
    },
    {
        key: '3-0',
        title: '化學品管理',
        children: [
            { key: '3-0-1', title: '化學品基本資訊', },
            { key: '3-0-2', title: '化學品採購申請', },

        ],
    },
    {
        key: '4-0',
        title: '職業安全衛生管理',
        disabled: true,
    },
    {
        key: '5-0',
        title: '教育訓練管理',
        disabled: true,
    },
];


export const functionGropData = [
    {
        key: '0-0',
        title: '全部',
    },
    {
        key: '1-0',
        title: '環安人員',
    },
    {
        key: '2-0',
        title: '實驗室負責人',
    },
]