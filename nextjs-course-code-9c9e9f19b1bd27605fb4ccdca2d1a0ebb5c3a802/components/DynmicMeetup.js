import classes from './DynmicMeetup.module.css'

function DynmicMeetup(props) {
  return (
    <div className={classes.home}>
        {props.children}
    </div>
  )
}

export default DynmicMeetup