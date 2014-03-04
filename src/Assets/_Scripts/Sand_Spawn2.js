private var nextSpawn : float = 0;
public var spawnDelay : float = 1;
public var sand : GameObject;
public var sandWithTop : GameObject;
public var sand_invis : GameObject;
private var newSand : GameObject;
private var newSand2 : GameObject;
public var numberOfSand : int = 0;
private var sandSpawned : int = 0;
private var topRenderer : MeshRenderer;
public var CheckForInvisible : boolean[];


function Update () {
	if (Time.time > nextSpawn && sandSpawned < numberOfSand){
		nextSpawn = Time.time + spawnDelay;
		sandSpawned++;
		if (CheckForInvisible[sandSpawned -1] == true){
			newSand = Instantiate (sand_invis, gameObject.transform.position, Quaternion.identity);
		}
		else if (sandSpawned != numberOfSand){
			newSand = Instantiate (sand, gameObject.transform.position, Quaternion.identity);
		}
		if (sandSpawned == numberOfSand){
			newSand = Instantiate (sandWithTop, gameObject.transform.position, Quaternion.identity);
			newSand.BroadcastMessage("SetColor", Vector3(.7, .6, .5));
		}
	}
}