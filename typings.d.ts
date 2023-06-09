type PageInfo = {
    pageNo: string;
    totalCount: string;
    numOfRows: string;
};

type SearchFormData = {
    sText: string;
    lightChkVal: string[];
    grwhstleChkVal: string[];
    lefcolrChkVal: string[];
    lefmrkChkVal: string[];
    flclrChkVal: string[];
    fmldecolrChkVal: string[];
    ignSeasonChkVal: string[];
    winterLwetChkVal: string[];
    priceType: string[];
    priceTypeSel: string;
    waterCycleSel: string[];
    [key: string]: string | string[];
};

type Gardens = {
    cntntsNo: string; // 컨텐츠 번호
    cntntsSj: string; // 식물명
    rtnFileSeCode: string; // 파일구분코드
    rtnFileSn: string; // 파일순번
    rtnOrginlFileNm: string; // 원본 파일명
    rtnStreFileNm: string; // 저장 파일명
    rtnFileCours: string; // 파일경로
    rtnImageDc: string; // 이미지설명
    rtnThumbFileNm: string; // 썸네일파일명
    rtnImgSeCode: string; // 이미지구분코드
    rtnFileUrl: string; // 저장 파일 URL
    rtnThumbFileUrl: string; // 썸네일 파일 URL
};

type Garden = {
    cntntsNo: string; // 컨텐츠 번호
    plntbneNm: string; // 식물학 명
    plntzrNm: string; // 식물영 명
    distbNm: string; // 유통 명
    fmlNm: string; // 과 명
    fmlCodeNm: string; // 과 코드명
    orgplceInfo: string; // 원산지 정보
    adviseInfo: string; // 조언 정보
    imageEvlLinkCours: string; // 이미지 평가 링크 경로
    growthHgInfo: string; // 성장 높이 정보
    growthAraInfo: string; // 성장 넓이 정보
    lefStleInfo: string; // 잎 형태 정보
    smellCode: string; // 냄새 코드
    smellCodeNm: string; // 냄새 코드 명
    toxctyInfo: string; // 독성 정보
    prpgtEraInfo: string; // 번식 시기 정보
    etcEraInfo: string; // 기타 시기 정보
    managelevelCode: string; // 관리수준 코드
    managelevelCodeNm: string; // 관리수준 코드명
    grwtveCode: string; // 생장속도 코드
    grwtveCodeNm: string; // 생장속도 코드명
    grwhTpCode: string; // 생육 온도 코드
    grwhTpCodeNm: string; // 생육 온도 코드명
    winterLwetTpCode: string; // 겨울 최저 온도 코드
    winterLwetTpCodeNm: string; // 겨울 최저 온도 코드명
    hdCode: string; // 습도 코드
    hdCodeNm: string; // 습도 코드명
    frtlzrInfo: string; // 비료 정보
    soilInfo: string; // 토양 정보
    watercycleSprngCode: string; // 물주기 봄 코드
    watercycleSprngCodeNm: string; // 물주기 봄 코드명
    watercycleSummerCode: string; // 물주기 여름 코드
    watercycleSummerCodeNm: string; // 물주기 여름 코드명
    watercycleAutumnCode: string; // 물주기 가을 코드
    watercycleAutumnCodeNm: string; // 물주기 가을 코드명
    watercycleWinterCode: string; // 물주기 겨울 코드
    watercycleWinterCodeNm: string; // 물주기 겨울 코드명
    dlthtsManageInfo: string; // 병충해 관리 정보
    speclmanageInfo: string; // 특별관리 정보
    fncltyInfo: string; // 기능성 정보
    flpodmtBigInfo: string; // 화분직경 대 정보
    flpodmtMddlInfo: string; // 화분직경 중 정보
    flpodmtSmallInfo: string; // 화분직경 소 정보
    widthBigInfo: string; // 가로 대 정보
    widthMddlInfo: string; // 가로 중 정보
    widthSmallInfo: string; // 가로 소 정보
    vrticlBigInfo: string; // 세로 대 정보
    vrticlMddlInfo: string; // 세로 중 정보
    vrticlSmallInfo: string; // 세로 소 정보
    hgBigInfo: string; // 높이 대 정보
    hgMddlInfo: string; // 높이 중 정보
    hgSmallInfo: string; // 높이 소 정보
    volmeBigInfo: string; // 볼륨 대 정보
    volmeMddlInfo: string; // 볼륨 중 정보
    volmeSmallInfo: string; // 볼륨 소 정보
    pcBigInfo: string; // 가격 대 정보
    pcMddlInfo: string; // 가격 중 정보
    pcSmallInfo: string; // 가격 소 정보
    managedemanddoCode: string; // 관리요구도 코드
    managedemanddoCodeNm: string; // 관리요구도 코드명
    clCode: string; // 분류 코드(콤마(,)로 구분)
    clCodeNm: string; // 분류 코드명(콤마(,)로 구분)
    grwhstleCode: string; // 생육형태 코드(콤마(,)로 구분)
    grwhstleCodeNm: string; // 생육형태 코드명(콤마(,)로 구분)
    indoorpsncpacompositionCode: string; // 실내정원구성 코드(콤마(,)로 구분)
    indoorpsncpacompositionCodeNm: string; // 실내정원구성 코드명(콤마(,)로 구분)
    eclgyCode: string; // 생태 코드(콤마(,)로 구분)
    eclgyCodeNm: string; // 생태 코드명(콤마(,)로 구분)
    lefmrkCode: string; // 잎무늬 코드(콤마(,)로 구분)
    lefmrkCodeNm: string; // 잎무늬 코드명(콤마(,)로 구분)
    lefcolrCode: string; // 잎색 코드(콤마(,)로 구분)
    lefcolrCodeNm: string; // 잎색 코드명(콤마(,)로 구분)
    ignSeasonCode: string; // 발화 계절 코드(콤마(,)로 구분)
    ignSeasonCodeNm: string; // 발화 계절 코드명(콤마(,)로 구분)
    flclrCode: string; // 꽃색 코드(콤마(,)로 구분)
    flclrCodeNm: string; // 꽃색 코드명(콤마(,)로 구분)
    fmldeSeasonCode: string; // 과일 계절(콤마(,)로 구분)
    fmldeSeasonCodeNm: string; // 과일 계절(콤마(,)로 구분)
    fmldecolrCode: string; // 과일색 코드(콤마(,)로 구분)
    fmldecolrCodeNm: string; // 과일색 코드명(콤마(,)로 구분)
    prpgtmthCode: string; // 번식방법 코드(콤마(,)로 구분)
    prpgtmthCodeNm: string; // 번식방법 코드명(콤마(,)로 구분)
    lighttdemanddoCode: string; // 광요구도 코드(콤마(,)로 구분)
    lighttdemanddoCodeNm: string; // 광요구도 코드명(콤마(,)로 구분)
    postngplaceCode: string; // 배치장소 코드(콤마(,)로 구분)
    postngplaceCodeNm: string; // 배치장소 코드명(콤마(,)로 구분)
    dlthtsCode: string; // 병충해 코드(콤마(,)로 구분)
    dlthtsCodeNm: string; // 병충해 코드(콤마(,)로 구분)
    rtnFile: GardenFile[]; // 첨부파일 목록
};

type GardenFile = {
    cntntsNo: string; // 컨텐츠 번호
    cntntsSj: string; // 컨텐츠 제목
    rtnFileSn: string; // 파일순번
    rtnFileSeCode: string; // 파일구분코드
    rtnFileSeCodeName: string; // 파일구분코드명
    rtnImgSeCode: string; // 이미지구분코드
    rtnImgSeCodeName: string; // 이미지구분코드명
    rtnOrginlFileNm: string; // 원본 파일명
    rtnImageDc: string; // 이미지설명
    rtnFileUrl: string; // 저장 파일 URL
    rtnThumbFileUrl: string; // 썸네일 파일 URL
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
