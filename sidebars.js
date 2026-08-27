// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docsSidebar: [
    'intro',
    {
      type: 'category',
      label: '📖 Bắt đầu sử dụng',
      items: [
        'getting-started/prerequisites',
        'getting-started/login',
        'getting-started/interface-overview',
      ],
    },
    {
      type: 'category',
      label: '📊 Tổng quan',
      items: ['dashboard/dashboard'],
    },
    {
      type: 'category',
      label: '🛒 Đề xuất mua thiết bị',
      items: ['acquisition/acquisition'],
    },
    {
      type: 'category',
      label: '📦 Tài sản cố định',
      items: [
        'asset/asset-manage',
        'asset/asset-increase-decrease',
        'asset/asset-transfer',
        'asset/asset-maintenance',
        'asset/asset-inventory',
        'asset/device-inspect',
        'asset/depreciation',
        'asset/reassessment',
      ],
    },
    {
      type: 'category',
      label: '🔧 Công cụ dụng cụ',
      items: [
        'tool/tool-manage',
        'tool/tool-increase-decrease',
        'tool/tool-transfer',
        'tool/tool-maintenance',
        'tool/tool-inventory',
      ],
    },
    {
      type: 'category',
      label: '📈 Báo cáo',
      items: ['report/report-center'],
    },
    {
      type: 'category',
      label: '⚙️ Hệ thống',
      items: [
        'system/supplier',
        'system/categories',
        'system/dictionaries',
        'system/departments',
        'system/accounts',
        'system/notifications',
        'system/config',
      ],
    },
    {
      type: 'category',
      label: '🔄 Quy trình nghiệp vụ',
      items: [
        'workflows/wf-reception-handover',
        'workflows/wf-maintenance',
        'workflows/wf-transfer',
        'workflows/wf-inventory',
      ],
    },
    {
      type: 'category',
      label: '📎 Phụ lục',
      items: [
        'appendix/role-permission-matrix',
        'appendix/faq',
      ],
    },
  ],
};

export default sidebars;
