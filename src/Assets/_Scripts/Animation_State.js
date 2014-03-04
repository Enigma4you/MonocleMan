function Awake(){
	animation["walk"].speed = 2;

}


function SetAnimationState (newState : int) {
	switch (newState){
		case 4:
			gameObject.animation.CrossFade("idle");
		break;
		case 1:
			gameObject.animation.CrossFade("walk");
		break;
		case 2:
			gameObject.animation.Blend("jump");
		break;
		case 3:
			gameObject.animation.Blend("sandDeath");
		break;
	}
}