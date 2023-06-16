"use client";

import styled from "styled-components";
import { Badge } from "react-bootstrap";
import { TbBrandNextjs, TbBrandTypescript, TbBrandBootstrap, TbApi } from "react-icons/tb";
import { SiStyledcomponents, SiMui } from "react-icons/si";

export default function Visual() {
    return (
        <VisualWrap className="d-flex flex-column">
            <h2 className="mb-5">식집사 is</h2>
            <div>
                <p>
                    <Badge bg="success">식집사</Badge>에 오신 것을 환영합니다. 식물, 허브, 잡초에 관해 알아야 할 모든
                    것을 제공하는 곳입니다! 경험 많은 정원사, 호기심 많은 자연 애호가, 식물 세계에 대한 지식을 넓히고자
                    하는 누구에게나 필요한 정보를 제공합니다.
                </p>
                <p>
                    <Badge bg="success">식집사</Badge>는 포괄적인 리소스를 통해 모두를 업데이트하고자 약속드립니다.
                    경험이 많은 식물 재배자이건 막 시작하는 분이건, 저희 웹사이트는 여러분의 요구에 부응할 수 있도록
                    설계되었습니다.
                </p>
                <p>
                    농사로OpenAPI의 도움으로, 우리의 거대한 식물 데이터베이스를 손쉽게 탐색할 수 있습니다. 직관적인 검색
                    기능을 사용하여 관심 있는 식물을 찾아보고, 풍부한 세부 정보와 통찰력을 얻을 수 있습니다.
                </p>
                <p>
                    원활하고 사용자 친화적인 경험을 위해 편리한 모달 팝업 시스템을 도입했습니다. 검색 결과에서 식물을
                    선택하면 필요한 모든 정보가 표시되는 편리한 모달이 나타납니다.
                </p>
                <p>
                    실내 화초 관리에 대해 배우고, 풍요로운 야채 정원을 가꾸거나, 다양한 허브와 잡초를 식별하고 관리하는
                    방법을 찾고 있다면, <Badge bg="success">식집사</Badge>가 신뢰할 수 있는 동반자가 될 것입니다. 저희의
                    목표는 식물 애호가 분들에게 성공하기 위해 필요한 지식과 도구를 제공하는 것입니다.
                </p>
                <p>
                    그러므로 여러분이 식물의 세계로 모험을 떠나기 준비가 되어 있든, 자연의 신비를 알아보고자 하는
                    중이든, <Badge bg="success">식집사</Badge>가 여러분을 영감을 주고 교육을 도와드릴 준비가 되어
                    있습니다. 지금 저희 웹사이트를 둘러보세요. 성장의 마법이 여러분의 눈 앞에서 펼쳐질 것입니다. 행운을
                    빕니다!
                </p>
            </div>
            <div className="d-flex gap-2 align-items-center mt-auto display-4 text-secondary-emphasis">
                <TbBrandNextjs />
                <TbBrandTypescript />
                <TbBrandBootstrap />
                <SiStyledcomponents />
                <SiMui className="display-6" />
                <TbApi />
            </div>
        </VisualWrap>
    );
}

const VisualWrap = styled.div`
    position: relative;
    min-height: 800px;
    padding: 24px;
    &:before {
        content: "";
        display: block;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        background: url(/img/img02.jpg) 50% 100% no-repeat;
        background-size: cover;
        filter: opacity(15%);
    }
`;
