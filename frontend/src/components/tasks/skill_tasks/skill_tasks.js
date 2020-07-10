import React from "react";
import SkillTaskItems from "../skill_tasks/skill_tasks_items";
import Modal from "../../modal/modal"

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
        // const skillTasks = this.state.tasks.filter((task) => { task._id === this.props.skillId});
        let show = this.state.tasks.length === 0 ?
            (<div>No tasks</div>)
            :
            (<div>
                {this.state.tasks.reverse().map((task) => (
                    <SkillTaskItems
                        key={task._id}
                        task={task}
                        deleteTask={this.props.deleteTask}
                    />
                ))}
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
