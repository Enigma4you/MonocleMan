private var rollCamera : GameObject;
private var myPlayer : GameObject;
public var fallA: AudioClip;


function Awake(){
	rollCamera = GameObject.Find("Roll Camera") as GameObject;
	myPlayer = GameObject.Find("Character Capsule") as GameObject;

}

function OnTriggerEnter(other : Collider) {
	if (other.tag == "Player"){
		audio.clip = fallA;
		audio.Play();
		rollCamera.animation.Play();
		myPlayer.SendMessage("RollGravity");

			
	}
}