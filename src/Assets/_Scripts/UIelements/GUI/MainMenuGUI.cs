using UnityEngine;
using System.Collections;

public class MainMenuGUI : MonoBehaviour {
	
	float horizRatio = Screen.width / 1024;
	float vertRatio = Screen.height / 768;
	public Texture titleSplash;
	
	void OnGUI ()
	{
	//GUI.Box(new Rect (posX , posY,1024, 1024),titleSplash, "Label");
	
	GUILayout.BeginArea ( new Rect (1*Screen.width/5 , 3*Screen.height/5 , 150, 200));
		if(GUILayout.Button ("Start Game"))
		{
			Application.LoadLevel (3);
		}
		if(GUILayout.Button ("How To Play"))
		{
			Application.LoadLevel (2);
		}
		if(GUILayout.Button ("Credits"))
		{
			Application.LoadLevel (1);
		}
		if(GUILayout.Button ("Quit Game"))
		{
			Application.Quit();
		}
	GUILayout.EndArea();
		                     
		                     
	}
	
	
	
	
	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {
	
	}
}
