private var pausePlane : GameObject;

private	var CamFadePlane : GameObject;
private var menuCursor : GameObject;
private var gameMenu : GameObject;
private var restartGameMenu : GameObject;
private var exitGameMenu : GameObject;
private var menuChoice : int;
private var animationLoop : int;
private var pausedDeltaTime : float;
private var menuNumber : int = 0;
private var choiceOffset : int = 0;

function Awake(){
	pausePlane = GameObject.Find("PausePlane");
	CamFadePlane = GameObject.Find("CamFadePlane");
	menuCursor = GameObject.Find("MenuCursor");
	gameMenu = GameObject.Find("GameMenu");
	restartGameMenu = GameObject.Find("RestartGameMenu");
	exitGameMenu = GameObject.Find("ExitGameMenu");
}

function Update() {
	if (menuNumber == 0) {
		if (Input.GetButtonDown("Pause") && Time.timeScale == 1){
			pausePlane.renderer.enabled = true;
			menuCursor.renderer.enabled = true;
			gameMenu.renderer.enabled = true;
			CamFadePlane.renderer.enabled = true;
			CamFadePlane.renderer.material.color.a = .7;
			pausedDeltaTime = Time.deltaTime;
			Time.timeScale = 0;
			menuChoice = 0;
		}
		else if (Input.GetButtonDown("Pause") && Time.timeScale == 0 && menuChoice == 0){
			Unpause();
		}
		else if (Input.GetButtonDown("Pause") && Time.timeScale == 0 && menuChoice == 2)
			ExitToMain();
		else if (Input.GetButtonDown("Pause") && Time.timeScale == 0 && menuChoice == 1)
			RestartLevel();
	}
	else if(menuNumber == 1) { //restart level menu
		if (Input.GetButtonDown("Pause") && menuChoice == 0) {
			Unpause();
			Application.LoadLevel(Application.loadedLevel);
		}
		else if (Input.GetButtonDown("Pause") && menuChoice == 1)
			PauseMenu();
	}
	else if(menuNumber == 2) { //exit game menu
		if (Input.GetButtonDown("Pause") && menuChoice == 0) {
			Unpause();
			Application.Quit();
		}
		else if (Input.GetButtonDown("Pause") && menuChoice == 1)
			PauseMenu();
	}
	
	if (Time.timeScale == 0){
		if (Input.GetButtonDown("Vertical") && Input.GetAxisRaw("Vertical") > 0)
			menuChoice -= 1;
		else if (Input.GetButtonDown("Vertical") && Input.GetAxisRaw("Vertical") < 0)
			menuChoice += 1;

	if (menuChoice + choiceOffset > 2)
		menuChoice = 0;
	if (menuChoice < 0)
		menuChoice = 2 - choiceOffset;
		
		menuCursor.transform.localPosition.y = -3.248367 - ((menuChoice + choiceOffset) * 3);
	}
}

function ExitToMain() {
	menuNumber = 2;
	menuChoice = 0;
	choiceOffset = 1;
	gameMenu.renderer.enabled = false;
	restartGameMenu.renderer.enabled = false;
	exitGameMenu.renderer.enabled = true;
}

function RestartLevel() {
	menuNumber = 1;
	menuChoice = 0;
	choiceOffset = 1;
	gameMenu.renderer.enabled = false;
	restartGameMenu.renderer.enabled = true;
	exitGameMenu.renderer.enabled = false;
}

function PauseMenu() {
	menuNumber = 0;
	menuChoice = 0;
	choiceOffset = 0;
	gameMenu.renderer.enabled = true;
	restartGameMenu.renderer.enabled = false;
	exitGameMenu.renderer.enabled = false;
}

function Unpause() {
			Time.timeScale = 1;
			CamFadePlane.renderer.enabled = false;
			CamFadePlane.renderer.material.color.a = 0;
			pausePlane.renderer.enabled = false;
			menuCursor.renderer.enabled = false;
			gameMenu.renderer.enabled = false;
			restartGameMenu.renderer.enabled = false;
			exitGameMenu.renderer.enabled = false;
}