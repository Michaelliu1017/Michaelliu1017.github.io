---
company: "Institute of Automation, Chinese Academy of Sciences"
companyZh: "中国科学院自动化研究所"
role: "Software Engineer Intern"
roleZh: "全栈开发工程师实习"
location: "Beijing, China"
locationZh: "北京, 中国"
startDate: "Jun. 2023"
endDate: "Aug. 2023"
dateZh: "2023 年6 月 – 2023 年8 月"
order: 2
bulletsZh:
  - "参与开发一套基于Flask + RESTful API 的货运机器人远程管控平台，覆盖路径规划指令下发、参数配置与实时状态监控，后端服务部署于Ubuntu 服务器并以Gunicorn + Nginx 保障生产环境稳定性"
  - "基于React + Flask + MySQL 构建三层全栈架构，通过WebSocket 实现机器人实时状态推送；向下编写C 语言控制模块接口对接硬件数据链并封装为REST API，实现跨层解耦与全链路贯通"
  - "实施内网穿透/ NAT Traversal 方案，使平台在工业内网与公网环境下均可安全远程访问；采用Git + 分支管理策略规范多人协作开发流程，通过Shell 脚本实现自动化部署与服务重启"
  - "项目上线后在生产环境稳定运行2 年无故障；基于模块化可扩展架构，至今仍部署于工业现场，为工厂AGV 无人运输车提供远程调度与状态监控"
---

- Architected a three-tier full-stack industrial control platform using React + Flask + MySQL, delivering a responsive cross-platform interface for remote path planning, parameter configuration, and real-time AGV status monitoring
- Abstracted hardware control logic into a unified REST API by implementing C-based control module interfaces, decoupling the software stack from the robot data link; integrated WebSocket for real-time status push with sub-500ms update latency
- Established Git branching conventions and automated deployment via Shell scripts; implemented NAT traversal for secure remote access across industrial intranets
- After launch, the platform ran stably in production for two years without failure; the modular, extensible architecture remains deployed on-site, providing remote dispatch and status monitoring for factory AGV fleets
