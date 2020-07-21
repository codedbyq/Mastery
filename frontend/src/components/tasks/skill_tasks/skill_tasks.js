import React from "react";
import SkillTaskItems from "../skill_tasks/skill_tasks_items";

class SkillTasks extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tasks: [],
        };
    }

    componentWillMount() {
        if (this.props.skillId) {
            this.props.fetchSkillTasks(this.props.skillId);
        }
    }

    componentWillReceiveProps(newState) {
        this.setState({ tasks: newState.tasks });
    }

    render() {
        let skillTasks = [];
        if (this.state.tasks.length > 0) {
            skillTasks = this.state.tasks.filter((taskId) => taskId.skill === this.props.skillId);
        }
        let show = skillTasks === 0 ?
            (<div>No tasks</div>)
            :
            (<div>
                <h2>Tasks</h2>
            <div className="task-solo-items">
                { skillTasks.reverse().map((task) => (
                    <SkillTaskItems
                        key={task._id}
                        task={task}
                        deleteTask={this.props.deleteTask}
                    />
                ))}
            </div>
            </div>)
        return (
            <div>
                <div>
                    {show}
                </div>
            </div>
        );
    }
}

export default SkillTasks;
