using UnityEngine;
using System.Collections;

public class GameOverGUI : MonoBehaviour {
	
	
	void OnGUI ()
	{
		
	GUILayout.BeginArea ( new Rect (2*Screen.width/5 , 3*Screen.height/5 , 150, 200));
		if(GUILayout.Button ("Start Game"))
		{
			Application.LoadLevel (3);
		}
		if(GUILayout.Button ("Return to Main Menu"))
		{
			Application.LoadLevel (0);
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
