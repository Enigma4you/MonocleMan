private var myPlayer : GameObject;

function Awake(){
	myPlayer = GameObject.Find("Character Capsule") as GameObject;

}

function OnTriggerEnter(other : Collider) {
	if (other.tag == "Player"){
		myPlayer.SendMessage("SetInSand");
	}
}
