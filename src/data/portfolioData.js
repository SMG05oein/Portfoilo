export const personalInfo = {
  name: "서민관",
  role: "백석대학교 컴퓨터공학부 소프트웨어학 전공",
  bio: "프론트엔드부터 백엔드, AI 및 하드웨어 연동까지 아우르는 풀스택 역량을 키워가고 있습니다. 사용자에게 실질적인 가치를 제공하는 문제 해결에 열정을 가지고 있으며, 2024년 11월부터 현재까지 엠씨네에서 다양한 실무 외주 프로젝트를 수행하고 있습니다.",
  email: "SMG05eoin@gmail.com",
  github: "https://github.com/SMG05oein"
};

export const skills = {
  frontend: [
    { name: "React", level: 90 },
    { name: "JavaScript / TypeScript", level: 85 },
    { name: "Bootstrap / jQuery", level: 80 }
  ],
  backend: [
    { name: "Spring Boot", level: 80 },
    { name: "Node.js / Express", level: 75 },
    { name: "FastAPI", level: 70 },
    { name: "Python", level: 85 },
    { name: "PHP", level: 75 }
  ],
  database: [
    { name: "MySQL", level: 80 },
    { name: "MsSQL", level: 80 },
    { name: "MS Azure", level: 70 }
  ],
  ai_hardware: [
    { name: "LLM (Ollama)", level: 65 },
    { name: "TensorFlow", level: 65 },
    { name: "Raspberry Pi / C", level: 80 },
    { name: "Arduino", level: 80 }
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
    description: "카메라 영상을 외부로 전송하지 않고 기기 내부에서 처리하여 낙상 등 이상 징후를 실시간 탐지하는 시스템. 라즈베리파이 센서 부착, 데이터 관리, 멀티스레드를 직접 구현 중입니다.",
    image: "/images/ai_security_cam.png",
    technologies: ["React", "FastAPI", "MySQL", "Raspberry Pi"],
    badge: "진행 중",
    badgeType: "primary",
    role: "임베디드 및 데이터 관리",
    detailedAnalysis: {
      background: "초고령 사회 진입 및 1인 가구 급증으로 인한 사고 예방 및 24시간 실시간 안전망 구축이 시급합니다. 기존 CCTV 모니터링은 사생활 침해 우려가 커 도입에 한계가 존재했습니다.",
      architecture: "카메라를 통해 수집된 영상을 외부로 전송하지 않고 기기(라즈베리파이) 내부에서 즉시 데이터로 변환 후 원본 영상은 파기하는 프라이버시 보호형 구조를 설계했습니다.",
      techDetails: "실시간 이상 징후 탐지 알고리즘을 통해 추출된 익명화 데이터를 분석하여 낙상이나 장시간 부동 상태를 감별합니다. 감지된 데이터에는 디지털 서명 기술을 적용해 무결성을 확보했습니다. 센서 데이터 수집과 분석 로직을 효율적으로 처리하기 위해 멀티스레드(Multi-threading) 아키텍처를 도입하여 개발 중입니다."
    }
  },
  {
    id: 2,
    category: "in-school",
    title: "멍멍케어 (반려견 AI 수의사 플랫폼)",
    period: "2025.11 ~ 2025.12.05",
    description: "반려견을 위한 케어 및 정보 공유 플랫폼. Ollama 기반 LLM 모델 파인튜닝과 TensorFlow를 활용한 AI 수의사 서비스로 반려동물의 관리를 돕습니다.",
    image: "/images/pet_care_app.png",
    technologies: ["Node.js", "React", "MySQL", "LLM(Ollama)", "TensorFlow", "Python"],
    badge: "장려상",
    badgeType: "accent",
    role: "AI 모델링 및 백엔드 개발",
    detailedAnalysis: {
      background: "반려동물 인구의 증가와 함께 반려동물의 건강 관리를 언제 어디서나 쉽게 할 수 있는 AI 기반 플랫폼의 필요성에서 출발했습니다.",
      architecture: "React로 사용자 친화적 UI를 구축하고, Node.js 기반 백엔드로 안정적인 서비스를 제공합니다. AI 분석은 Python 환경에서 구동됩니다.",
      techDetails: "오픈소스 LLM인 Ollama 모델을 수의학 데이터를 활용해 파인튜닝(Fine-tuning)하여 반려견 특화 AI 수의사 챗봇을 구축했습니다. 이미지 기반 질환 판별은 TensorFlow를 활용해 훈련시켰으며, 백엔드와의 원활한 API 통신을 통해 실시간 예측 결과를 프론트에 전달하는 파이프라인을 설계했습니다."
    }
  },
  {
    id: 3,
    category: "extracurricular",
    title: "잉글리쉬앤 쿠키어학원 리뉴얼",
    period: "2024.11 ~ 2025.03",
    description: "엠씨네에서 실무 외주 프로젝트로 수행. 관리자 페이지 및 어학원 전체 리뉴얼 작업에 참여하였으며, SMS 전송, SMTP 이메일, 파일서버 연동 등의 기능 구현도 함께 진행했습니다.",
    image: "/images/academy_dashboard.png",
    technologies: ["PHP", "jQuery", "MsSQL"],
    badge: "외주 개발",
    badgeType: "secondary",
    role: "풀스택 리뉴얼 개발",
    detailedAnalysis: {
      background: "기존 어학원 플랫폼의 노후화된 UI/UX 개선 및 관리자 페이지의 효율적인 기능 확장이 요구되었습니다.",
      architecture: "PHP를 기반으로 서버 로직을 재구성하고, jQuery를 사용해 프론트엔드 비동기 처리를 강화했습니다. 데이터베이스는 MsSQL을 사용했습니다.",
      techDetails: "Filezilla와 SSH를 활용한 서버 파일 관리 시스템을 연동했습니다. 알림 시스템 강화를 위해 SMTP 프로토콜을 이용한 이메일 발송 모듈과 외부 API를 통한 SMS 전송 시스템을 구축 및 통합하여 관리자의 업무 편의성을 극대화했습니다."
    }
  },
  {
    id: 4,
    category: "extracurricular",
    title: "대한농구협회 조회 및 연계 시스템 매크로",
    period: "2026.04",
    description: "엠씨네에서 실무 외주 프로젝트로 수행. python의 psutil, pywinauto, ctypes 라이브러리를 활용해 협회 데이터베이스 조회 및 시스템 제어 매크로를 개발했습니다.",
    image: "/images/data_macro_tool.png",
    technologies: ["Python", "pywinauto", "psutil"],
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
    title: "(주) 쿠첸 네이버 카페 크롤러 개발",
    period: "2026.03 ~ 2026.04",
    description: "엠씨네에서 실무 외주 프로젝트로 수행. 타겟 카페 데이터를 추출하기 위한 파이썬 크롤러 개발. (추후 크롤러 다운로드를 위한 웹사이트 개설 예정)",
    image: "/images/web_crawler_tool.png",
    technologies: ["Python", "Web Scraping"],
    badge: "외주 개발",
    badgeType: "secondary",
    role: "크롤러 봇 개발",
    detailedAnalysis: {
      background: "마케팅 전략 수립 및 고객 니즈 파악을 위해 네이버 카페의 특정 게시물 및 댓글 데이터를 자동 수집하는 툴이 필요했습니다.",
      architecture: "Python BeautifulSoup/Selenium 기반으로 네이버 로그인을 우회하고 정적/동적 데이터를 모두 수집하는 하이브리드 크롤러 구조입니다.",
      techDetails: "페이지네이션 처리 및 안티 스크래핑(Anti-scraping) 정책 우회를 위한 딜레이 로직과 세션 관리 기능을 구현했습니다. 수집된 데이터를 구조화된 포맷으로 변환 및 저장하는 모듈을 최적화했습니다."
    }
  },
  {
    id: 6,
    category: "extracurricular",
    title: "카카오 구름톤: 충남권 소상공인 지도 앱",
    period: "2025.07.28 ~ 2025.07.29",
    description: "제1회 충남권 연합 해커톤 참가작. 천안사랑카드 사용 가능 지점만 DB에 넣어 사용자가 찾아가고 예약할 수 있는 천안 맞춤 서비스. 프론트엔드 총괄 담당.",
    image: "/images/local_map_app.png",
    technologies: ["React", "Bootstrap"],
    badge: "해커톤",
    badgeType: "primary",
    role: "프론트엔드 총괄",
    detailedAnalysis: {
      background: "천안 지역 내 소상공인의 상권을 활성화하고, 천안사랑카드 이용자들의 가맹점 탐색 편의성을 높이기 위해 기획되었습니다.",
      architecture: "React SPA 구조 위에 Bootstrap을 적용하여 모바일 퍼스트(Mobile-first) 지도 애플리케이션을 빠르게 프로토타이핑했습니다.",
      techDetails: "제한된 해커톤 시간(무박 2일) 내에 빠른 뷰단 렌더링을 위해 컴포넌트 구조를 단순화하고, 상태 관리 도구를 최소화했습니다. 지도 API를 연동하여 마커를 동적으로 생성하고 가맹점 예약 모달과 연결하는 UI/UX 플로우를 설계했습니다."
    }
  },
  {
    id: 7,
    category: "extracurricular",
    title: "카카오 구름톤: 세대간 단어 갭 줄이기 카드 게임",
    period: "2025.11.22 ~ 2025.11.23",
    description: "전남/충남 연합 해커톤 참가작. 노년층과 청년층의 신조어/한자어 차이를 줄이는 카드 게임. 백엔드 총괄을 맡아 윈도우 포트포워딩, Swagger 연동, Azure DB를 활용했습니다.",
    image: "/images/card_game_app.png",
    technologies: ["Spring Boot", "Swagger", "MS Azure"],
    badge: "해커톤",
    badgeType: "primary",
    role: "백엔드 총괄",
    detailedAnalysis: {
      background: "노년층(신조어 부족)과 청년층(한자어 부족) 간의 세대 차이를 단어 학습 게임이라는 매개체로 허물기 위해 기획된 아이디어입니다.",
      architecture: "Spring Boot를 활용한 RESTful API 백엔드와 MS Azure 클라우드 데이터베이스를 연동하는 아키텍처입니다.",
      techDetails: "로컬 Windows 컴퓨터를 포트포워딩하여 외부 클라이언트(프론트엔드)가 접속할 수 있는 임시 서버로 전환하는 네트워크 설정을 직접 구성했습니다. Swagger를 도입하여 프론트엔드 개발자와 API 명세서를 효율적으로 공유하며 협업 속도를 높였습니다."
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
    description: "교내 C언어 경진대회에서 대상(1위)을 수상했습니다. 포인터, 구조체, 동적 메모리 할당 등 C언어의 핵심 개념을 실제 문제에 적용하는 능력을 겨루는 대회였습니다.",
    image: "/images/c_lang_contest.png",
    technologies: ["C Language", "Algorithm", "Data Structures"],
    badge: "대상",
    badgeType: "accent",
    role: "개인 참가",
    detailedAnalysis: {
      background: "학교 정규 커리큘럼에서 배운 C언어 지식을 실제 경쟁 환경에서 검증하고자 교내 경진대회에 참가했습니다.",
      architecture: "포인터 기반의 자료구조 조작과 알고리즘 구현을 중심으로 문제를 풀이했습니다. 메모리 관리와 효율적인 자료 처리에 초점을 맞췄습니다.",
      techDetails: "포인터와 동적 메모리 할당(malloc/free)을 활용한 연결 리스트 구현, 구조체를 이용한 복합 데이터 처리, 재귀 함수를 활용한 알고리즘 설계 등을 구현했습니다. 한정된 시간 내에 정확하고 효율적인 코드를 작성하는 실전 경험을 쌓을 수 있었습니다."
    }
  }
];
