type TodoType = {
    userId: string;
    id: string;
    title: string;
    completed: boolean;
};

type Weeds = {
    dataNo: string; // 콘텐츠 번호(키)
    imgUrl: string; // 이미지
    weedsFmlNm: string; // 과명
    klangNm: string; // 국명
    scnm: string; // 학명
};

type Weed = {
    dataNo: string; // 콘텐츠 번호(키)
    weedsFmlNm: string; // 과명
    klangNm: string; // 국명
    scnm: string; // 학명
    scnmTwnm: string; // 학명-이명
    weedsEngNm: string; // 영문명
    jpscNm: string; // 일문명
    stle: string; // 형태
    eclgy: string; // 생태
    ltrtreSjDtl: string; // 문헌정보
    inflwSpcsNm: string; // 유입종
    orgplceNm: string; // 원산지
    hbttNm: string; // 서식지
    downUrl: string[]; // 첨부파일 이미지
    fileName: string[]; // 첨부파일 이미지명
};

type PageInfo = {
    pageNo: string;
    totalCount: string;
    numOfRows: string;
};
