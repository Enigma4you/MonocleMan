using UnityEngine;
using System.Collections;

public class GravityBlock : MonoBehaviour {
	
	public GameObject antiMatterBlockEmitter;
	
	
	void OnCollisionEnter(Collision collision)
	{
		Debug.Log("The Sand Block hit something");
		if (collision.relativeVelocity.magnitude > 2)
		{
			GameObject gravityBlockParticles = antiMatterBlockEmitter;
			gravityBlockParticles = (GameObject)Instantiate(antiMatterBlockEmitter , transform.position, transform.rotation);
		}
	}
	
	// Use this for initialization
	void Start () {

	}
	
	// Update is called once per frame
	void Update () {
	

	
	}
}
