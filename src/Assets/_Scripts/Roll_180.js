function LoadNewScene() {
	yield WaitForSeconds (1);
	Application.LoadLevel(Application.loadedLevel + 1);
}