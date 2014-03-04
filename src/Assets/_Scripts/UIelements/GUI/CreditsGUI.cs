using UnityEngine;
using System.Collections;

public class CreditsGUI: MonoBehaviour {

	public Rect creditsArea = new Rect(3*Screen.width/4,450,350,1000);
	public float scrollSpeed = 85.0f;
	public bool showButtons = false;
	
	private string creditText = 
		"			MONOCLE MAN\n" + 
		"			    CREDITS\n" +
		"\n" +
		"			    DESIGN\n" +
		"			 Forrest Spade\n" +
		"			 Jerry Momoda\n" +
		"		   Aaron Weirgarten\n" +
		"\n" +
		"			 PROGRAMMING\n" +
		"		  	  Forrest Spade\n" +
		"\n" +
		"		 	CHARACTER ART\n" +
		"		 Engamin Lee-Sanchez\n" +
		"\n" +
		"		   BACKGROUND ART\n" +
		"			 Luis Becerra\n" +
		"\n" +
		"			SOUND DESIGN\n" +
		"		   Davain Martinez\n" +
		"		   Reice Guerrero\n" +
		"\n" +
		"			LEVEL DESIGN\n" +
		"		  Aaron Weingarten\n" +
		"\n" +
		"		   PRODUCT MANAGER\n" +
		"			 Jerry Momoda\n" +
		"\n"
		;
	
void OnGUI ()
	{
	GUI.Label(creditsArea, creditText);
	if( showButtons == true)
		{
		GUILayout.BeginArea ( new Rect (1*Screen.width/8 , 4*Screen.height/5 , 150, 200));
			if(GUILayout.Button ("Return to Main Menu"))
			{
				Application.LoadLevel ("MainMenu");
			}
			if(GUILayout.Button ("Quit Game"))
			{
				Application.Quit();
			}
		GUILayout.EndArea();
		}
	}
	

	// Use this for initialization
	IEnumerator Start () {
		yield return new WaitForSeconds(5.0f);
		scrollSpeed = 0.0f;
		yield return new WaitForSeconds(1.5f);
		showButtons = true;
	}
	
	// Update is called once per frame
	void Update () {
	
	creditsArea.y -= scrollSpeed * Time.deltaTime;

		
	}
}
