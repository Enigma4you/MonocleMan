using UnityEngine;
using System.Collections;

public class SandBlock : MonoBehaviour {
	
	public GameObject sandBlockEmitter;
	
	void OnCollisionEnter(Collision collision)
	{
		//Debug.Log("The Sand Block hit something");
		if (collision.relativeVelocity.magnitude > 0.2)
		{
			GameObject sandBlockParticles = sandBlockEmitter;
			sandBlockParticles = (GameObject)Instantiate(sandBlockEmitter , transform.position, transform.rotation);
		}
	}
	
	// Use this for initialization
	void Start () 
		{
	
	}
	
	// Update is called once per frame
	void Update () {
	
	}
}
