import { LayoutContainer } from '../../containers/layout-container/LayoutContainer'
import { useParams } from 'react-router'

export const StudyPage = () => {
    const { folderId } = useParams()
    return (
        <LayoutContainer>
            <div>Study Group {folderId}</div>
        </LayoutContainer>
    )
}
