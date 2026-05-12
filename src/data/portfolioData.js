export const personalInfo = {
  name: "서민관",
  role: "백석대학교 컴퓨터공학부 소프트웨어학 전공",
  bio: "프론트엔드부터 백엔드, AI 및 임베디드 연동까지 아우르는 풀스택 역량을 키워가고 있습니다. 사용자에게 실질적인 가치를 제공하는 문제 해결에 열정을 가지고 있으며, 2024년 11월부터 현재까지 엠씨네에서 다양한 실무 외주 프로젝트를 수행하고 있습니다.",
  email: "SMG05eoin@gmail.com",
  github: "https://github.com/SMG05oein"
};

export const skills = {
  frontend: [
    { name: "React", level: 90 },
    { name: "TypeScript", level: 85 },
    { name: "JavaScript (ES6+)", level: 90 },
    { name: "Tailwind CSS / Bootstrap", level: 85 },
    { name: "jQuery", level: 80 }
  ],
  backend: [
    { name: "Spring Boot", level: 80 },
    { name: "Python (FastAPI / Flask)", level: 85 },
    { name: "Node.js / Express", level: 75 },
    { name: "PHP (CodeIgniter)", level: 75 }
  ],
  database: [
    { name: "MySQL / MariaDB", level: 85 },
    { name: "MsSQL", level: 80 },
    { name: "Redis / SSH Tunneling", level: 75 }
  ],
  ai_hardware: [
    { name: "LLM (Ollama / LangChain)", level: 70 },
    { name: "Computer Vision (OpenCV / TensorFlow)", level: 70 },
    { name: "Raspberry Pi / Arduino / C", level: 85 },
    { name: "Automation (DrissionPage / pywinauto)", level: 90 }
  ]
};

export const awards = [
  {
    title: "교내 2025 Smart It 창작물 경진대회",
    date: "2025.12.18",
    award: "장려상",
    projectId: 2
  },
  {
    title: "교내 C언어 경진대회",
    date: "2025.06.19",
    award: "대상",
    projectId: 9
  }
];

export const certifications = [
  {
    name: "고용노동부 주관 구글 AI 관련 학습 인증서",
    issuer: "고용노동부 / 구글",
    date: "취득 완료"
  },
  {
    name: "스프링 핵심 원리 (기본편) 수료",
    issuer: "인프런 (김영환)",
    date: "수료 완료"
  }
];

export const projects = [
  {
    id: 1,
    category: "extracurricular",
    title: "한이음: 프라이버시 보호형 홀몸 어르신 AI 알림 시스템",
    period: "2026.04 ~ 진행 중",
    description: "엣지 컴퓨팅 기반의 실시간 이상 징후 탐지 시스템. 카메라 영상을 서버로 전송하지 않고 기기 내부에서 처리하여 개인정보 유출을 원천 차단합니다.",
    image: "/images/ai_security_cam.png",
    technologies: ["React", "FastAPI", "MySQL", "Raspberry Pi", "OpenCV"],
    badge: "진행 중",
    badgeType: "primary",
    role: "임베디드 아키텍처 및 데이터 파이프라인 설계",
    detailedAnalysis: {
      background: "기존 홈캠의 사생활 침해 문제를 해결하기 위해 '영상 전송 없는 모니터링'이라는 컨셉으로 기획되었습니다.",
      architecture: "라즈베리파이에서 수집된 영상을 로컬에서 즉시 분석 후, 위급 상황 발생 시에만 익명화된 텍스트 데이터와 디지털 서명을 전송하는 구조입니다.",
      techDetails: "효율적인 리소스 관리를 위해 Python Multi-threading을 도입하여 영상 처리와 데이터 송수신을 분리했습니다. 또한 디지털 서명 기술을 적용해 데이터 위변조를 방지하는 등 무결성을 확보했습니다."
    }
  },
  {
    id: 2,
    category: "in-school",
    title: "멍멍케어 (반려견 AI 수의사 플랫폼)",
    period: "2025.11 ~ 2025.12.05",
    description: "반려견을 위한 건강 케어 및 정보 공유 플랫폼. 12,000여 개의 의료 데이터를 학습한 AI 수의사 서비스와 반려견 일지, 커뮤니티 기능을 제공합니다.",
    image: "/images/pet_care_app.png",
    technologies: ["Node.js", "Express", "React", "MySQL", "Docker", "Ollama", "Python", "TensorFlow"],
    badge: "장려상 (팀 서사이)",
    badgeType: "accent",
    role: "백엔드 개발 및 프론트엔드 서포트 (3인 팀 프로젝트)",
    links: [
      { name: "GitHub", url: "https://github.com/SMG05oein/smart_it" },
      { name: "수상 명단", url: "https://community.bu.ac.kr/info/1793/subview.do?enc=Zm5jdDF8QEB8JTJGYmJzJTJGaW5mbyUyRjkwMiUyRjU0MTA4JTJGYXJ0Y2xWaWV3LmRvJTNGcGFnZSUzRDElMjZzcmNoQ29sdW1uJTNEJTI2c3JjaFdyZCUzRCUyNmJic0NsU2VxJTNEJTI2YmJzT3BlbldyZFNlcSUzRCUyNnJnc0JnbmRlU3RyJTNEJTI2cmdzRW5kZGVTdHIlM0QlMjZpc1ZpZXdNaW5lJTNEZmFsc2UlMjZwYXNzd29yZCUzRCUyNg%3D%3D" }
    ],
    detailedAnalysis: {
      background: "반려동물 가구가 증가함에 따라, 시간과 장소에 구애받지 않고 반려견의 건강 상태를 체크하고 조언을 얻을 수 있는 AI 기반 플랫폼을 기획했습니다.",
      architecture: "Node.js/Express 백엔드를 중심으로 React 프론트엔드와 Python AI 서버가 협업하는 구조입니다. 카카오맵 API를 연동하여 주변 동물병원 정보를 제공하며, AI 서버는 Docker 환경에서 Ollama와 TensorFlow 모델을 구동합니다.",
      techDetails: "3인 팀 프로젝트에서 백엔드 주개발자로서 Node.js와 MySQL을 이용해 전체 서비스 로직을 설계했습니다. 12,000여 개의 의료 데이터를 활용한 AI 모델을 백엔드에 통합하기 위해 실시간 API 통신 파이프라인을 구축했습니다. 또한, 반려견 일지 기록 기능과 커뮤니티 기능을 구현했으며, 프론트엔드 개발이 처음인 팀원을 도와 React 컴포넌트 구조 설계 및 상태 관리 로직을 함께 구현하여 프로젝트의 완성도를 높였습니다."
    }
  },
  {
    id: 3,
    category: "extracurricular",
    title: "잉글리쉬앤 쿠키어학원 통합 관리 플랫폼 리뉴얼",
    period: "2024.11 ~ 2025.03",
    description: "엠씨네 실무 외주 프로젝트. 기존 .NET(ASP, ASPX) 기반의 노후 시스템을 PHP/jQuery 환경으로 성공적으로 마이그레이션하고, 네이버 스마트 에디터 연동 및 관리자 기능을 전면 개편했습니다.",
    image: "/images/academy_dashboard.png",
    technologies: ["PHP", "ASP/ASPX (Legacy)", "jQuery", "MsSQL", "Naver Smart Editor", "SMTP"],
    badge: "외주 개발",
    badgeType: "secondary",
    role: "풀스택 리뉴얼 및 시스템 마이그레이션 전담",
    links: [
      { name: "쿠키어학원", url: "https://cookie.english.co.kr/index/index.php" },
    ],
    detailedAnalysis: {
      background: "기존 .NET 기반의 ASP, ASPX 페이지들이 노후화되어 유지보수가 어렵고 UI가 낙후된 상태였습니다. 이를 현대적인 웹 환경으로 리뉴얼하여 운영 효율성을 높이고, 콘텐츠 관리의 편의성을 확보하는 것이 핵심 과제였습니다.",
      architecture: "기존 .NET 환경의 비즈니스 로직을 분석하여 PHP 환경으로 재구축하는 마이그레이션을 수행했습니다. 특히 프론트엔드는 jQuery AJAX를 활용해 비동기 데이터 통신을 강화하여 사용자 경험을 현대화했습니다.",
      techDetails: "네이버 스마트 에디터를 도입하여 관리자가 게시물 및 공지사항을 편리하게 관리할 수 있도록 구현했습니다. 특히 사용자 계정 보안을 위해 SMTP 기반의 자동 메일 발송 시스템과 외부 API 연동을 통한 SMS 인증 모듈을 구축하여, 비밀번호 찾기 등 본인 확인이 필요한 민감한 프로세스에서의 사용자 인증 기능을 성공적으로 통합했습니다."
    }
  },
  {
    id: 4,
    category: "extracurricular",
    title: "대한농구협회 조회 및 연계 시스템 매크로",
    period: "2026.04",
    description: "엠씨네에서 실무 외주 프로젝트로 수행. python의 psutil, pywinauto, ctypes 라이브러리를 활용해 협회 데이터베이스 조회 및 시스템 제어 매크로를 개발했습니다.",
    image: "/images/data_macro_tool.png",
    technologies: ["Python", "pywinauto", "psutil", "MySQL"],
    badge: "외주 개발",
    badgeType: "secondary",
    role: "Python 매크로 개발",
    detailedAnalysis: {
      background: "대한농구협회의 방대한 데이터를 수작업으로 조회 및 연계하는 반복적이고 비효율적인 프로세스를 자동화할 필요가 있었습니다.",
      architecture: "Python을 기반으로 OS 레벨의 윈도우 애플리케이션 제어 로직을 구성했습니다.",
      techDetails: "pywinauto 라이브러리를 활용해 데스크탑 GUI를 자동 조작하고, psutil 및 ctypes를 이용해 시스템 프로세스 자원 및 메모리를 실시간으로 모니터링하여 오류 없는 안정적인 매크로 시스템을 구축했습니다. logging 라이브러리로 에러 추적 및 경고 시스템(warnings)을 체계화했습니다."
    }
  },
  {
    id: 5,
    category: "extracurricular",
    title: "(주) 쿠첸 네이버 카페 크롤러 및 관리 GUI 툴 개발",
    period: "2026.03 ~ 2026.04",
    description: "엠씨네 실무 외주 프로젝트. 타겟 카페 데이터 추출 및 분석을 위한 고성능 파이썬 크롤러와 비개발자를 위한 관리자용 GUI 대시보드 개발. (추후 배포 웹사이트 개설 예정)",
    image: "/images/web_crawler_tool.png",
    technologies: ["Python", "DrissionPage", "CustomTkinter", "MySQL", "SSH Tunneling"],
    badge: "외주 개발",
    badgeType: "secondary",
    role: "크롤러 봇 및 GUI 솔루션 전담 개발",
    detailedAnalysis: {
      background: "마케팅 전략 수립을 위해 네이버 카페 데이터 수집과 데이터랩(DataLab) 기반의 키워드 분석이 필요했으며, 실무자가 직접 조작할 수 있는 직관적인 관리자용 툴이 요구되었습니다.",
      architecture: "일반적인 Selenium 대신 DrissionPage와 pywinauto를 도입해 탐지 우회 능력과 속도를 극대화했습니다. 또한 CustomTkinter를 활용하여 관리자 로그인 및 데이터 대시보드를 포함한 완성도 높은 GUI 환경을 구축했습니다.",
      techDetails: "SSH 터널링을 적용하여 DB 통신 보안을 강화하고, 안티 크롤링(Anti-crawling) 정책 우회를 위한 세션/딜레이 최적화를 수행했습니다. 유지보수 편의성을 위해 자동 업데이트 기능과 버전 관리 시스템까지 통합 구현했습니다."
    }
  },
  {
    id: 6,
    category: "extracurricular",
    title: "카카오 구름톤: 충남권 소상공인 지도 서비스",
    period: "2025.07.28 ~ 2025.07.29",
    description: "제1회 충남권 연합 해커톤 참가작. Kakao Map API를 활용한 가맹점 위치 기반 서비스입니다. 백엔드 리소스가 부족한 상황에서 프론트엔드 프록시 설정을 통해 통신 이슈를 주도적으로 해결했습니다.",
    image: "/images/local_map_app.png",
    technologies: ["React", "React Kakao Map API", "http-proxy-middleware", "Bootstrap"],
    badge: "해커톤",
    badgeType: "primary",
    role: "프론트엔드 총괄 및 인터페이스 최적화",
    links: [
      { name: "GitHub", url: "https://github.com/2025Chungnamthon/2025_CHUNGNAM_TEAM_6_FE" },
    ],
    detailedAnalysis: {
      background: "천안 지역 소상공인 상권 활성화를 위해 기획되었으나, 무박 2일의 짧은 일정과 한정된 백엔드 개발 리소스로 인해 실시간 데이터 연동 과정에서 병목 현상이 발생했습니다.",
      architecture: "React를 기반으로 Kakao Map SDK를 통합했으며, 서버 측의 부하를 줄이고 빠른 프로토타이핑을 위해 프론트엔드 중심의 아키텍처를 설계했습니다.",
      techDetails: "개발 과정 중 백엔드 인력 부족으로 인해 API 서버의 CORS(Cross-Origin Resource Sharing) 이슈 해결이 지연되는 상황을 맞이했습니다. 프로젝트 완수를 위해 직군의 경계를 넘어 프론트엔드 레벨에서 해결 가능한 대안을 모색했고, http-proxy-middleware를 활용한 프록시 서버 설정을 주도적으로 구현했습니다. 결과적으로 서버 측 수정 없이도 통신 이슈를 해결하여 팀의 개발 속도를 정상화하고 최종 시연을 성공시켰습니다."
    }
  },
  {
    id: 7,
    category: "extracurricular",
    title: "카카오 구름톤: 세대간 단어 갭 줄이기 카드 게임",
    period: "2025.11.22 ~ 2025.11.23",
    description: "전남/충남 연합 해커톤 참가작. 세대 간 언어 장벽을 허무는 단어 학습 카드 게임. 원격 데스크톱(RDP) 환경에서의 서버 배포 및 CORS 이슈 해결을 통해 시스템을 구축했습니다.",
    image: "/images/card_game_app.png",
    technologies: ["Spring Boot", "Swagger", "MS Azure", "Remote Desktop (RDP)", "CORS"],
    badge: "해커톤",
    badgeType: "primary",
    role: "백엔드 및 서버 총괄",
    links: [
      { name: "GitHub", url: "https://github.com/9oormthonUNIV-HOSEO-AISW-HACKATHON/2025_AISW_HOSEOTHON_TEAM_06_BE" },
    ],
    detailedAnalysis: {
      background: "서로 다른 세대가 사용하는 단어의 차이를 게임으로 풀어내 소통을 돕고자 기획되었으며, 실시간 연동이 중요한 멀티플레이 요소가 포함된 프로젝트였습니다.",
      architecture: "Spring Boot 백엔드와 MS Azure DB를 연동하고, 대회 측에서 제공한 Windows 서버를 활용해 외부 서비스가 가능한 배포 환경을 구축했습니다.",
      techDetails: "대회 측 제공 윈도우 서버 환경에서 백엔드 배포를 위해 원격 데스크톱(RDP)을 활용하여 환경을 설정했습니다. 특히 네트워크 보안 정책으로 인한 접속 제한을 해결하기 위해 학교 관리자와 직접 소통하여 필요한 포트를 확보받았으며, 서로 다른 도메인 간 통신 시 발생하는 CORS(Cross-Origin Resource Sharing) 에러를 Spring Security 설정을 통해 해결하여 프론트엔드와의 안정적인 데이터 교환을 성공시켰습니다. 제한된 시간 내에 인프라 제약을 극복하고 시연 가능한 라이브 서버를 구축한 경험입니다."
    }
  },
  {
    id: 8,
    category: "in-school",
    title: "2024 ICT 창작물 경진대회: 골목길 안전 경보 장치",
    period: "2024.06 ~ 2024.12",
    description: "골목길 안전을 위해 초음파 센서로 과속 물체를 감지하고 빛으로 주의를 끄는 아두이노 기반 하드웨어 장치를 개발했습니다.",
    image: "/images/arduino_safety_device.png",
    technologies: ["Arduino", "C/C++", "Ultrasonic Sensor", "Hardware"],
    badge: "교내 경진대회",
    badgeType: "secondary",
    role: "하드웨어 및 펌웨어 개발",
    detailedAnalysis: {
      background: "주택이 밀집된 좁은 골목길에서 갑자기 튀어나오는 차량이나 자전거로 인한 사고를 예방하고자 기획했습니다. 골목길 거주민의 소음 피해를 막기 위해 소리(경보음)가 아닌 빛(LED)을 이용해 시각적으로 주의를 끄는 방식을 채택했습니다.",
      architecture: "두 개의 초음파 센서를 A지점과 B지점에 일정 간격으로 거치한 뒤, 물체가 두 지점을 통과하는 시간을 측정하여 이동 속도를 계산하는 아두이노 기반 펌웨어 로직을 설계했습니다.",
      techDetails: "학생 수준의 예산 한계로 인해 카메라 대신 저렴한 초음파 센서를 활용했습니다. 이로 인해 A지점과 B지점을 지나는 사물이 동일한 사물인지 완벽히 판단할 수 없는 물리적 한계에 부딪혔습니다. 이를 기술적으로 완벽히 해결하지는 못했으나, '해당 골목길을 일정 시간 내에 연속으로 지나는 물체는 동일한 물체일 확률이 높다'는 합리적인 가정을 세운 후 일정 속도 이상일 때만 LED가 점멸하도록 펌웨어 로직을 구현하여 프로젝트를 마무리했습니다. 비록 완벽하지는 않았지만, 실제 하드웨어의 제약을 논리적인 시나리오로 풀어가며 유연하게 대처하는 경험을 얻었습니다."
    }
  },
  {
    id: 9,
    category: "in-school",
    title: "교내 C언어 경진대회 대상",
    period: "2025.06.19",
    description: "C언어의 핵심 메커니즘인 포인터와 동적 메모리 설계를 활용하여 복잡한 알고리즘 문제를 해결하고, 최적화된 코드 구현 능력을 검증받아 대상을 수상했습니다.",
    image: "/images/c_lang_contest.png",
    technologies: ["C Language", "Data Structures", "Memory Management", "Algorithm"],
    badge: "대상",
    badgeType: "accent",
    role: "개인 참가 (전체 1위)",
    links: [
      { name: "수상 명단", url: "https://community.bu.ac.kr/info/1794/subview.do?enc=Zm5jdDF8QEB8JTJGYmJzJTJGaW5mbyUyRjkwMyUyRjQ5Njg5JTJGYXJ0Y2xWaWV3LmRvJTNG" }
    ],
    detailedAnalysis: {
      background: "컴퓨터 구조에 대한 깊은 이해를 바탕으로, 가장 로우 레벨 언어인 C언어를 통해 효율적인 알고리즘 설계 역량을 증명하고자 참가했습니다.",
      architecture: "복잡한 데이터 연산 시 발생하는 메모리 병목 현상을 최소화하기 위해 사용자 정의 구조체와 효율적인 인덱싱 알고리즘을 결합한 최적화 아키텍처를 적용했습니다.",
      techDetails: "경진대회는 C언어의 기초부터 심화 문법, 포인터 연산, 비트 연산, 동적 할당, 구조체 등 핵심 개념을 심도 있게 다루었습니다. 특히 복잡한 포인터 체인과 비트 단위 조작을 활용한 '출력값 예측 문제'와 malloc/free를 활용한 '동적 할당 및 구조체 기반 알고리즘 문제'를 해결하며 코드의 안정성과 메모리 최적화 능력을 검증받았습니다."
    }
  }
];
