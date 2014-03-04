private var nextSpawn : float = 0;
private var spawnDelay : float = 0.1;
public var sand : GameObject;
private var newSand : GameObject;
private var randomNumber : float = 0;
public var minSize : float = 0.5;
public var maxSize : float = 0.5;

function Update () {
	if (Time.time > nextSpawn && Time.time < 500){
		nextSpawn = Time.time + spawnDelay;
		newSand = Instantiate (sand, gameObject.transform.position, Quaternion.identity);
		randomNumber = Random.Range(minSize,maxSize);
		newSand.transform.localScale.x = randomNumber;
		randomNumber = Random.Range(minSize,maxSize);
		newSand.transform.localScale.y = randomNumber;
		randomNumber = Random.Range(minSize,maxSize);
		newSand.transform.localScale.z = randomNumber;

	}
	if (Input.GetKeyDown(KeyCode.P)){
		Time.timeScale = 5;
		}
	if (Input.GetKeyDown(KeyCode.O)){
		Time.timeScale = 1;
		}
}