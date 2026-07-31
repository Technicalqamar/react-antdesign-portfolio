import { Table, Tag } from 'antd';
import './PortfolioTable.css';

const projectData = [
  {
    key: '1',
    name: 'School Management System',
    technology: 'React, Firebase',
    status: 'Completed',
    completion: '95%',
    year: '2025',
  },
  {
    key: '2',
    name: 'Hospital Management System',
    technology: 'React, JavaScript',
    status: 'In Progress',
    completion: '70%',
    year: '2025',
  },
  {
    key: '3',
    name: 'Portfolio Website',
    technology: 'React, Ant Design',
    status: 'Completed',
    completion: '100%',
    year: '2024',
  },
  {
    key: '4',
    name: 'E-Commerce Website',
    technology: 'React, Node.js',
    status: 'Planned',
    completion: '0%',
    year: '2026',
  },
  {
    key: '5',
    name: 'Task Management App',
    technology: 'React, Firebase',
    status: 'Completed',
    completion: '90%',
    year: '2024',
  },
];

const statusColors = {
  Completed: 'green',
  'In Progress': 'blue',
  Planned: 'orange',
};

const columns = [
  {
    title: 'Project Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Technology',
    dataIndex: 'technology',
    key: 'technology',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    render: (status) => (
      <Tag color={statusColors[status]}>{status}</Tag>
    ),
  },
  {
    title: 'Completion',
    dataIndex: 'completion',
    key: 'completion',
  },
  {
    title: 'Year',
    dataIndex: 'year',
    key: 'year',
  },
];

const PortfolioTable = () => {
  return (
    <section className="portfolio-table" id="portfolio-table">
      <div className="portfolio-table-container">
        <h2 className="portfolio-table-heading">Project Summary</h2>
        <p className="portfolio-table-intro">
          Here is a quick overview of my key projects, their current status,
          and completion progress.
        </p>

        <div className="table-wrapper">
          <Table
            dataSource={projectData}
            columns={columns}
            pagination={false}
            scroll={{ x: 'max-content' }}
          />
        </div>
      </div>
    </section>
  );
};

export default PortfolioTable;
