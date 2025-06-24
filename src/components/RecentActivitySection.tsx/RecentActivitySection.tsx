import ActivityBar from "./ActivityBar";
import styles from '../../css/RecentActivitySection/RecentActivitySection.module.css';
import { TextVariant } from "../../types/components/Text/TextTypes";
import Text from "../Text/Text";

export default function RecentActivitySection() {
    return(<div className={styles['recent-activity-section-container']}>
        <Text variant={TextVariant.Heading}>Recent Activity</Text>
        <ActivityBar name="John Doe" settled={false} owes={true} amount={100} />
        <ActivityBar name="John Doe" settled={false} owes={false} amount={100} />
        <ActivityBar name="John Doe" settled={true} owes={false} amount={100} />
    </div>)
}