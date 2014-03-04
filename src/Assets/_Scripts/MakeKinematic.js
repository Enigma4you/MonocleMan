private var myController : CharacterController;
private var myCharacter : GameObject;
public var bounceA: AudioClip;

function Awake(){
	myController = GameObject.Find("Character Capsule").GetComponent(CharacterController) as CharacterController;
	myCharacter = GameObject.Find("Character Capsule") as GameObject;
}


function OnTriggerEnter(other : Collider) {
	if (other.tag == "PicturePlane"){
		//other.rigidbody.useGravity = false;
		if (myController.isGrounded){
			other.SendMessage("NextColor");
		}
	}
	
	if (other.tag == "BigCube"){
		if (other.name == ("Big Sand_Trampoline")){
			audio.clip = bounceA;
			audio.Play();
			myCharacter.SendMessage("Jump_Bounce");
		}
	}
}


function OnTriggerExit(other : Collider) {

}