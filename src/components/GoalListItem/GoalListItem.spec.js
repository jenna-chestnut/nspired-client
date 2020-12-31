import smokeTest from '../../Fixtures';
import GoalListItem from './GoalListItem';
import GoalPrivateToDo from './GoalPrivateToDo';
import GoalPrivateWin from './GoalPrivateWin';
import GoalPublicWin from './GoalPublicWin';

smokeTest('GoalListItem', <GoalListItem/>);
smokeTest('GoalPrivateToDo', <GoalPrivateToDo/>);
smokeTest('GoalPrivateWin', <GoalPrivateWin/>);
smokeTest('GoalPublicWin', <GoalPublicWin/>);