import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './index.module.css';

const capabilities = [
  {
    title: 'Quản lý vòng đời tài sản',
    text: 'Theo dõi tài sản từ đề xuất mua, tiếp nhận, bàn giao, điều chuyển, sửa chữa, kiểm kê đến thanh lý.',
  },
  {
    title: 'Dữ liệu tập trung',
    text: 'Chuẩn hóa hồ sơ tài sản, phòng ban, người sử dụng, trạng thái, nguyên giá và giá trị còn lại.',
  },
  {
    title: 'Phân quyền theo vai trò',
    text: 'Mỗi người dùng chỉ nhìn thấy và thao tác đúng phạm vi được cấp quyền trong hệ thống.',
  },
  {
    title: 'Báo cáo nhanh',
    text: 'Tổng hợp dữ liệu và xuất báo cáo Excel phục vụ quản lý, kế toán, kiểm kê và ra quyết định.',
  },
];

const workflows = [
  'Đề xuất mua',
  'Tiếp nhận',
  'Bàn giao sử dụng',
  'Điều chuyển',
  'Sửa chữa',
  'Kiểm kê',
  'Báo cáo',
];

const roles = [
  'Ban lãnh đạo',
  'Trưởng phòng',
  'Kế toán tài sản',
  'Nhân viên',
  'Quản trị viên',
];

export default function Home() {
  const dashboardImage = useBaseUrl('/img/screenshots/dashboard/dashboard-01-overview.png');

  return (
    <Layout
      title="AMS Desk | Quản lý tài sản"
      description="AMS Desk là phần mềm quản lý tài sản cố định và công cụ dụng cụ cho doanh nghiệp, bệnh viện và tổ chức vận hành nhiều phòng ban.">
      <main className={styles.home}>
        <section className={styles.hero}>
          <div className={styles.heroCopy}>
            <p className={styles.kicker}>Phần mềm quản lý tài sản</p>
            <h1>AMS Desk giúp kiểm soát tài sản từ một nơi.</h1>
            <p className={styles.heroText}>
              Quản lý tài sản cố định, công cụ dụng cụ, quy trình phê duyệt và báo cáo trong một hệ thống thống nhất.
            </p>
            <div className={styles.actions}>
              <Link className={styles.primaryButton} to="/docs/intro">
                Xem hướng dẫn
              </Link>
              <Link className={styles.secondaryButton} to="/docs/asset/asset-manage">
                Quản lý tài sản
              </Link>
            </div>
          </div>

          <div className={styles.heroMedia}>
            <img
              src={dashboardImage}
              alt="Màn hình dashboard tổng quan của AMS Desk"
            />
          </div>
        </section>

        <section className={styles.summary}>
          <div>
            <strong>Tài sản cố định</strong>
            <span>Hồ sơ, nguyên giá, hao mòn, trạng thái</span>
          </div>
          <div>
            <strong>Công cụ dụng cụ</strong>
            <span>Nhập, xuất, điều chuyển, bảo dưỡng</span>
          </div>
          <div>
            <strong>Quy trình</strong>
            <span>Đề xuất, phê duyệt, bàn giao, kiểm kê</span>
          </div>
        </section>

        <section className={styles.capabilities}>
          <div className={styles.sectionIntro}>
            <h2>Một hệ thống cho toàn bộ nghiệp vụ tài sản</h2>
            <p>
              AMS Desk gom các thao tác thường ngày vào một luồng rõ ràng, giúp dữ liệu nhất quán giữa quản lý, kế toán và các phòng ban.
            </p>
          </div>

          <div className={styles.capabilityGrid}>
            {capabilities.map((item, index) => (
              <article className={styles.capability} key={item.title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.workflow}>
          <div className={styles.workflowCopy}>
            <h2>Chuẩn hóa quy trình vận hành</h2>
            <p>
              Từ lúc phát sinh nhu cầu mua sắm đến khi báo cáo, mỗi bước đều có dữ liệu và người phụ trách rõ ràng.
            </p>
          </div>
          <ol className={styles.workflowList}>
            {workflows.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
        </section>

        <section className={styles.roles}>
          <div className={styles.rolesPanel}>
            <h2>Phù hợp cho nhiều vai trò</h2>
            <p>
              Hệ thống hỗ trợ cách làm việc khác nhau của từng nhóm người dùng nhưng vẫn giữ chung một nguồn dữ liệu.
            </p>
            <div className={styles.roleList}>
              {roles.map((role) => (
                <span key={role}>{role}</span>
              ))}
            </div>
          </div>
          <div className={styles.docsPanel}>
            <h2>Bắt đầu sử dụng</h2>
            <p>
              Tài liệu hướng dẫn được chia theo từng nhóm chức năng để người dùng mới có thể tra cứu và thao tác nhanh.
            </p>
            <Link className={styles.primaryButton} to="/docs/intro">
              Mở tài liệu
            </Link>
          </div>
        </section>
      </main>
    </Layout>
  );
}
