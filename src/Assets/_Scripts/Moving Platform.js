
function OnTriggerEnter(other : Collider) {
	/*if (other.tag == "Player") {
		other.gameObject.transform.parent = gameObject.transform;
	}*/
	if (other.tag == "Cube") {
		other.SendMessage ("LocalDestroy");
	}

}


function OnTriggerExit(other : Collider) {
	if (other.tag == "Player") {

		other.gameObject.transform.parent = null;
	}

}