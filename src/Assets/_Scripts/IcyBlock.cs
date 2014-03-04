using UnityEngine;
using System.Collections;

public class IcyBlock : MonoBehaviour {

	public GameObject icyBlockEmitter;
	
	void OnCollisionEnter(Collision collision)
	{
		Debug.Log("The Icy Block hit something");
		if (collision.relativeVelocity.magnitude > 2)
		{
			GameObject icyBlockParticles = icyBlockEmitter;
			icyBlockParticles = (GameObject)Instantiate(icyBlockEmitter , transform.position, transform.rotation);
		}
	}
	
	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {
	
	}
}
