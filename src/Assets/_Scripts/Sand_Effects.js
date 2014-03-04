public var sandP : GameObject;
private var newSandP : GameObject;

function LocalDestroy () {
		newSandP = Instantiate (sandP, gameObject.transform.position, Quaternion.identity);
		Destroy(gameObject);
}