// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'QLTS — Hướng dẫn sử dụng',
  tagline: 'Tài liệu hướng dẫn sử dụng hệ thống Quản lý Tài sản (AMS Desk)',
  favicon: 'img/ams-logo.ico',

  future: {
    v4: true,
  },

  // GitHub Pages deployment
  url: 'https://VSummarydocs.github.io',
  baseUrl: '/ams-user-guide/',

  organizationName: 'VSummarydocs',
  projectName: 'ams-user-guide',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'vi',
    locales: ['vi'],
  },

  // Mermaid diagram support
  markdown: {
    mermaid: true,
    hooks: {
      onBrokenMarkdownLinks: 'throw',
    },
  },
  themes: ['@docusaurus/theme-mermaid'],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: 'docs',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  // Local search plugin (works offline, supports Vietnamese)
  plugins: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      ({
        hashed: true,
        language: ['vi', 'en'],
        highlightSearchTermsOnTargetPage: true,
        searchResultLimits: 8,
        searchBarShortcutHint: false,
        docsRouteBasePath: '/docs',
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/ams-logo.png',

      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },

      mermaid: {
        theme: { light: 'default', dark: 'dark' },
        options: {
          fontFamily: 'Inter, sans-serif',
        },
      },

      navbar: {
        title: 'AMS Desk',
        logo: {
          alt: 'AMS Logo',
          src: 'img/ams-logo.png',
          style: { borderRadius: '8px' },
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'docsSidebar',
            position: 'left',
            label: '📖 Hướng dẫn',
          },
          {
            to: '/docs/asset/asset-manage',
            label: '📦 Tài sản',
            position: 'left',
          },
          {
            to: '/docs/workflows/wf-reception-handover',
            label: '🔄 Quy trình',
            position: 'left',
          },
          {
            to: '/docs/appendix/role-permission-matrix',
            label: '📎 Quyền hạn',
            position: 'left',
          },
        ],
      },

      footer: {
        style: 'dark',
        links: [
          {
            title: 'Bắt đầu',
            items: [
              { label: 'Đăng nhập', to: '/docs/getting-started/login' },
              { label: 'Tổng quan giao diện', to: '/docs/getting-started/interface-overview' },
              { label: 'Dashboard', to: '/docs/dashboard' },
            ],
          },
          {
            title: 'Quản lý',
            items: [
              { label: 'Tài sản cố định', to: '/docs/asset/asset-manage' },
              { label: 'Công cụ dụng cụ', to: '/docs/tool/tool-manage' },
              { label: 'Báo cáo', to: '/docs/report/report-center' },
            ],
          },
          {
            title: 'Hệ thống',
            items: [
              { label: 'Tài khoản', to: '/docs/system/accounts' },
              { label: 'Phòng ban', to: '/docs/system/departments' },
              { label: 'Cấu hình', to: '/docs/system/config' },
            ],
          },
        ],
        copyright: `AMS Desk · Phiên bản v1.8.4 · © ${new Date().getFullYear()} VFast Software`,
      },

      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },

      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 4,
      },
    }),
};

export default config;
