type PageInfo = {
    pageNo: string;
    totalCount: string;
    numOfRows: string;
};

type Therpys = {
    cntntsNo: string; // 콘텐츠 번호
    cntntsSj: string; // 명칭
    bneNm: string; // 학명
    hbdcNm: string; // 생약명
    thumbImgUrl: string; // 썸네일 이미지
    imgUrl: string; // 원본 이미지
};

type Therpy = {
    cntntsNo: string; // 콘텐츠 번호
    cntntsSj: string; // 명칭
    bneNm: string; // 학명
    hbdcNm: string; // 생약명
    useeRegn: string; // 이용부위
    stle: string; // 형태
    prvateTherpy: string; // 민간요법
    imgUrl1: string; // 이미지1
    imgUrl2: string; // 이미지2
    imgUrl3: string; // 이미지3
    imgUrl4: string; // 이미지4
    imgUrl5: string; // 이미지5
    imgUrl6: string; // 이미지6
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
    wdFmlyNm: string; // 과명
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
