export const techArticles = [
  {
    id: 1,
    title: "정렬 알고리즘(Sorting Algorithms) 딥다이브: 시간/공간 복잡도와 실무 적용",
    date: "2026.05.07",
    category: "Algorithm",
    readTime: "7 min read",
    thumbnail: "/images/sorting_algorithm_thumbnail.png",
    summary: "컴퓨터 공학의 기초인 다양한 정렬 알고리즘(Quick, Merge, Bubble 등)을 분석하고, 각각의 시간/공간 복잡도가 실무에서 어떤 기준을 제공하는지 고찰합니다.",
    content: `
## 1. 정렬 알고리즘의 본질

프로그래밍을 시작하면 가장 먼저 마주하는 난관이자 기초가 바로 '정렬(Sorting)'입니다. 단순히 숫자를 오름차순으로 나열하는 것을 넘어, 데이터의 규모(N)가 커졌을 때 시스템이 얼마나 버틸 수 있는지(Performance)를 측정하는 척도가 되기 때문입니다.

본 아티클에서는 대표적인 정렬 알고리즘들의 원리를 분석하고 비교합니다.

---

## 2. 시간 복잡도와 공간 복잡도 비교

| 알고리즘 | 최선(Best) | 평균(Avg) | 최악(Worst) | 공간 복잡도 | 특징 |
| --- | --- | --- | --- | --- | --- |
| **Bubble Sort** | O(n) | O(n²) | O(n²) | O(1) | 구현이 매우 쉬우나 대규모 데이터에서 성능이 매우 떨어짐 |
| **Merge Sort** | O(n log n) | O(n log n) | O(n log n) | O(n) | 안정 정렬(Stable), 추가적인 메모리 공간이 필요함 |
| **Quick Sort** | O(n log n) | O(n log n) | O(n²) | O(log n) | 불안정 정렬, 캐시 지역성이 좋아 실제 환경에서 가장 빠름 |
| **Heap Sort** | O(n log n) | O(n log n) | O(n log n) | O(1) | 추가 메모리가 필요 없고 항상 일정한 성능을 보장 |

---

## 3. 대표 알고리즘 심층 분석

### 3.1 병합 정렬 (Merge Sort)
병합 정렬은 **분할 정복(Divide and Conquer)**의 대표적인 예시입니다. 데이터를 잘게 쪼갠 후, 병합하며 정렬합니다. 가장 큰 장점은 어떠한 상황에서도 \`O(n log n)\`의 성능을 보장한다는 점입니다. 하지만 배열을 쪼개고 합치는 과정에서 원본 크기만큼의 추가적인 메모리 배열(\`O(n)\`)이 필요합니다.

### 3.2 퀵 정렬 (Quick Sort)
실제 언어들의 내장 정렬 함수에서 가장 많이 채택되는 알고리즘입니다(Python의 Timsort 등 변형 알고리즘 제외). Pivot이라는 기준점을 두고 작으면 왼쪽, 크면 오른쪽으로 나누어갑니다. 최악의 경우 \`O(n²)\`이 될 수 있지만, 메모리 캐시 지역성(Cache Locality)이 우수하여 현실의 데이터에서는 병합 정렬보다 속도가 빠릅니다.

\`\`\`c
// Quick Sort C 구현 예시
void quickSort(int arr[], int left, int right) {
    if (left >= right) return;
    int pivot = arr[(left + right) / 2];
    int i = left, j = right;
    
    while (i <= j) {
        while (arr[i] < pivot) i++;
        while (arr[j] > pivot) j--;
        if (i <= j) {
            int temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            i++; j--;
        }
    }
    quickSort(arr, left, j);
    quickSort(arr, i, right);
}
\`\`\`

---

## 4. 실무에서의 정렬 알고리즘

현대 개발 환경에서 개발자가 직접 퀵 정렬이나 병합 정렬을 바닥부터 짤 일은 드뭅니다. 하지만 내부 원리를 모르면, 대규모 트래픽이 몰리는 상황에서 DB 쿼리(Order By)나 인메모리 정렬 시 치명적인 병목 현상을 유발할 수 있습니다.
또한 프론트엔드 렌더링 시 대용량 리스트를 브라우저 단에서 정렬해야 한다면, 추가 메모리 할당(공간 복잡도)이 브라우저 멈춤 현상(Freezing)을 유발할 수 있다는 점을 고려하여 최적의 내장 함수나 로직을 선택해야 합니다.

결국 알고리즘 공부는 단순히 코드를 외우는 것이 아니라, **트레이드오프(Trade-off: 시간 vs 공간)**를 평가하는 엔지니어링의 기본기를 다지는 과정입니다.
    `
  },
  {
    id: 2,
    title: "라즈베리파이/아두이노 회로도 설계 및 초음파 센서 노이즈 필터링 전략",
    date: "2026.05.07",
    category: "Hardware / IoT",
    readTime: "5 min read",
    thumbnail: "/images/circuit_thumbnail.png",
    summary: "골목길 안전 경보 장치 프로젝트에서 경험한 하드웨어 센서 노이즈 문제와, 이를 극복하기 위해 소프트웨어(펌웨어) 단에서 적용한 필터링 전략을 분석합니다.",
    content: `
## 1. 하드웨어의 불완전성과 소프트웨어적 보정

하드웨어, 특히 아두이노나 라즈베리파이와 결합하는 저가형 초음파 센서(HC-SR04 등)는 환경적 요인(온도, 습도, 난반사)에 의해 극심한 노이즈(Noise)를 발생시킵니다. 물리적 회로만으로는 이 노이즈를 완벽하게 제어할 수 없으며, 반드시 펌웨어(소프트웨어) 단에서의 필터링이 동반되어야 합니다.

본 글에서는 제가 실제 프로젝트(골목길 안전 경보 장치)에서 마주했던 문제와 해결 과정을 회고합니다.

---

## 2. 노이즈의 양상 (The Problem)

초음파 센서는 소리가 물체에 부딪혀 돌아오는 시간을 측정하여 거리를 계산합니다. 하지만 다음과 같은 상황에서 값이 튀는 현상(Outlier)이 발생했습니다.
- 벽면에 스치듯 반사되는 초음파의 난반사
- 순간적인 전압 강하로 인한 센서 오작동
- 0.1초 사이에 거리 데이터가 10cm에서 300cm로 뛰는 현상 발생

---

## 3. 회로도 및 펌웨어 아키텍처

이를 해결하기 위해 하드웨어적으로는 **풀업 저항(Pull-up Resistor)**과 바이패스 커패시터를 배치하여 전원 노이즈를 줄였고, 소프트웨어적으로는 **이동 평균 필터(Moving Average Filter)**를 구현했습니다.

### 이동 평균 필터 (Moving Average)
이전 N개의 센서 측정값을 큐(Queue) 또는 배열에 저장하고, 그 값들의 평균을 내어 현재 값으로 사용하는 방법입니다.

\`\`\`c
#define FILTER_SIZE 5
int readings[FILTER_SIZE]; // 센서 측정값 배열
int readIndex = 0;         // 현재 인덱스
int total = 0;             // 측정값 합계
int average = 0;           // 이동 평균 결과값

// 초기화
void setup() {
  for (int i = 0; i < FILTER_SIZE; i++) {
    readings[i] = 0;
  }
}

// 필터링 적용 함수
int getFilteredDistance(int newDistance) {
  total = total - readings[readIndex];
  readings[readIndex] = newDistance;
  total = total + readings[readIndex];
  readIndex = readIndex + 1;
  
  if (readIndex >= FILTER_SIZE) {
    readIndex = 0; // 순환 큐 형태
  }
  
  average = total / FILTER_SIZE;
  return average;
}
\`\`\`

---

## 4. 물리적 한계를 '합리적 가정'으로 극복하다

앞선 필터링을 통해 거리 데이터는 안정화되었으나, 또 다른 문제가 있었습니다. 
예산 부족으로 카메라를 쓰지 못해, A지점 센서를 지나간 물체가 B지점을 지나간 물체와 **'동일한 객체'**인지 코드 상에서 확신할 수 없었습니다. 

이를 해결하기 위해 완벽한 식별(Identification)을 포기하고, **"좁은 골목길에서 2초 내에 연속으로 A와 B를 통과했다면 동일 객체일 확률이 99%다"**라는 합리적 가정을 세웠습니다. 타임스탬프(Timestamp)를 비교하여 \`T_b - T_a < Threshold\` 일 때만 과속 객체로 판단하고 LED 경보를 발생시켰습니다.

결국 하드웨어 엔지니어링과 개발은 주머니 사정과 물리적 한계 안에서 가장 실용적인 **최적해(Optimal Solution)**를 찾아내는 과정임을 깊이 배울 수 있었습니다.
    `
  }
];
