private var currentColor : int = 0;

function SetColor(newColor : Vector3){
	gameObject.renderer.material.color = Color(newColor.x, newColor.y, newColor.z);
}

function NextColor () {
	switch (currentColor){
		case 0:
			gameObject.renderer.material.color = Color(0.6, 0.5, .4);
		break;
		case 1:
			gameObject.renderer.material.color = Color(0.5, 0.4, .3);
		break;
		case 2:
			gameObject.renderer.material.color = Color(0.4, 0.3, .2);
		break;
		case 3:
			gameObject.renderer.material.color = Color(0.3, 0.2, .1);
		break;
		case 4:
			gameObject.renderer.material.color = Color(0.2, 0.1, .0);
		break;
		case 5:
			gameObject.renderer.material.color = Color(0.1, 0.0, .0);
		break;
	
	}
	currentColor++;
}