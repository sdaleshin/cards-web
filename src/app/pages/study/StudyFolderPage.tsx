import { useNavigate, useParams } from 'react-router'
import styled from 'styled-components'
import { useGetCardsByFolderIdQuery } from '../../redux/api/card/card.api'
import { useState } from 'react'
import { gridSizes } from '../../styles/grid'
import { CardStudy } from '../../components/card/card-study/CardStudy'
import { ProgressBar } from '../../components/progress-bar/ProgressBar'
import { CloseSvg } from '../../svg/CloseSvg'
import { Colors } from '../../styles/colors'
import { getFolderEditUrl } from '../../utils/urls'
import {
    Button,
    ButtonColorEnum,
    ButtonSizeEnum,
    ButtonVariantEnum,
} from '../../components/basic/button/Button'

const ContainerDiv = styled.div``
const ProgressContainerDiv = styled.div`
    margin: 24px auto 0;
    height: 48px;
    display: flex;
    align-items: center;
    ${gridSizes({
        width: {
            desktop: {
                columns: 8,
                gutters: 7,
            },
            tablet: {
                columns: 8,
                gutters: 7,
            },
            mobile: {
                columns: 4,
                gutters: 3,
            },
        },
    })}
`
const CardContainerDiv = styled.div`
    margin: auto;
    transform: translateY(15%);
    ${gridSizes({
        width: {
            desktop: {
                columns: 6,
                gutters: 5,
            },
            tablet: {
                columns: 8,
                gutters: 7,
            },
            mobile: {
                columns: 4,
                gutters: 3,
            },
        },
    })}
`
const ActionsContainerDiv = styled.div`
    height: 160px;
    display: flex;
    width: 100vw;
    background: ${Colors.White};
    box-shadow: 0px -3px 4px rgba(0, 0, 0, 0.1);
    position: fixed;
    bottom: 0;
`

const ButtonsContainer = styled.div`
    margin: auto;
    height: 160px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${gridSizes({
        width: {
            desktop: {
                columns: 8,
                gutters: 7,
            },
            tablet: {
                columns: 8,
                gutters: 7,
            },
            mobile: {
                columns: 4,
                gutters: 3,
            },
        },
    })}
`

const CloseIconContainer = styled.div`
    width: 36px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 16px;
    cursor: pointer;
`

const CloseIcon = styled(CloseSvg)`
    path {
        stroke: ${Colors.Gray20};
    }
`

export const StudyFolderPage = () => {
    const { folderId } = useParams()
    const navigate = useNavigate()
    const { isLoading, data: cards } = useGetCardsByFolderIdQuery(folderId)
    const [index, setIndex] = useState(0)
    if (isLoading) {
        return null
    }
    const handleCloseClick = () => navigate(getFolderEditUrl(folderId))
    const handleBackClick = () =>
        index === 0 ? navigate(getFolderEditUrl(folderId)) : setIndex(index - 1)
    const handleNextClick = () =>
        index < cards.length - 1
            ? setIndex(index + 1)
            : navigate(getFolderEditUrl(folderId))
    return (
        <ContainerDiv>
            <ProgressContainerDiv>
                <CloseIconContainer onClick={handleCloseClick}>
                    <CloseIcon />
                </CloseIconContainer>
                <ProgressBar current={index + 1} count={cards.length} />
            </ProgressContainerDiv>
            <CardContainerDiv>
                <CardStudy card={cards[index]} />
            </CardContainerDiv>
            <ActionsContainerDiv>
                <ButtonsContainer>
                    <Button
                        text={'Back'}
                        color={ButtonColorEnum.Red}
                        variant={ButtonVariantEnum.Outlined}
                        size={ButtonSizeEnum.Regular}
                        onClick={handleBackClick}
                    />
                    <Button
                        text={'Next'}
                        color={ButtonColorEnum.Red}
                        variant={ButtonVariantEnum.Filled}
                        size={ButtonSizeEnum.Regular}
                        onClick={handleNextClick}
                    />
                </ButtonsContainer>
            </ActionsContainerDiv>
        </ContainerDiv>
    )
}
