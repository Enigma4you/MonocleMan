using UnityEngine;
using System.Collections;

public class TP_Motor : MonoBehaviour 
{
	
	public static TP_Motor Instance;
	
	public float ForwardSpeed = 10f;
	public float BackwardSpeed = 6f;
	public float StrafingSpeed = 8f;
	public float SlideSpeed = 10f;
	public float JumpSpeed = 10f;
	public float Gravity = 21f;
	public float TerminalVelocity = 20f;
	public float SlideThreshold = 0.6f;
	public float MaxControllableSlideMagnitude = 0.4f;
	private int jumpOK = 0;
	private Vector3 slideDirection;
	private GameObject characterMesh;
	private bool inSand;
	public GameObject sinkingMesh;
		
	public Vector3 MoveVector { get; set; }
	public float VerticalVelocity { get; set; }

	void Awake()
	{
		Instance = this;
		characterMesh = GameObject.Find("MainChar") as GameObject;
	}
	
	public void UpdateMotor() 
	{
		if (!inSand){
			SnapAlignCharacterWithCamera();
			ProcessMotion();
		}
	}
	
	void ProcessMotion()
	{
		// Transform MoveVector to world space
		MoveVector = transform.TransformDirection(MoveVector);
		
		// Normalize MoveVector if magnitude > 1
		if (MoveVector.magnitude > 1)
			MoveVector = Vector3.Normalize(MoveVector);
		
		// Apply sliding if applicable
		ApplySlide();
		
		// Multiply MoveVector by MoveSpeed
		MoveVector *= MoveSpeed();
		
		//Reapply VerticalVelocity to MoveVector.y
		MoveVector = new Vector3(MoveVector.x, VerticalVelocity, MoveVector.z);
		
		//Apply gravity
		ApplyGravity();
		
		// Move the Character in world space
		TP_Controller.CharacterController.Move(MoveVector * Time.deltaTime);
	}	
	
	void ApplyGravity()
	{
		if (MoveVector.y > -TerminalVelocity)
			MoveVector = new Vector3(MoveVector.x, MoveVector.y - Gravity * Time.deltaTime, MoveVector.z);
	
		if (TP_Controller.CharacterController.isGrounded && MoveVector.y < -1)
			MoveVector = new Vector3(MoveVector.x, -1, MoveVector.z);
	}
	
	void ApplySlide()
	{
		if(!TP_Controller.CharacterController.isGrounded)
			return;
		
		slideDirection = Vector3.zero;
		
		RaycastHit hitInfo;
		
		if (Physics.Raycast(transform.position, Vector3.down, out hitInfo))
		{
			if (hitInfo.normal.y < SlideThreshold)
				slideDirection = new Vector3(hitInfo.normal.x, -hitInfo.normal.y, hitInfo.normal.z);
		}
		
		if (slideDirection.magnitude < MaxControllableSlideMagnitude)
			MoveVector += slideDirection;
		else
		{
			MoveVector = slideDirection;
		}
	}
	
	public void Jump()
	{
		if (TP_Controller.CharacterController.isGrounded || jumpOK > 0)
			VerticalVelocity = JumpSpeed;
	}
	
	public void Jump_Bounce()
	{
		VerticalVelocity = JumpSpeed * 1.5f;
		UpdateMotor();
	}
	
	void OnCollisionEnter(Collision other) {
		jumpOK++;
    }
	
	void OnCollisionExit(Collision other) {
		jumpOK--;
    }
	
	void SnapAlignCharacterWithCamera()
	{
		if (MoveVector.x != 0 || MoveVector.z !=0)
		{
			transform.rotation = Quaternion.Euler(transform.eulerAngles.x, 
			                                      Camera.mainCamera.transform.eulerAngles.y,
			                                      transform.eulerAngles.z);	
		}
	}
	
	float MoveSpeed()
	{
		var moveSpeed = 0f;
		
		switch (TP_Animator.Instance.MoveDirection)
		{
			case TP_Animator.Direction.Stationary:
				moveSpeed = 0;
				break;
			case TP_Animator.Direction.Forward:
				moveSpeed = ForwardSpeed;
				break;
			case TP_Animator.Direction.Backward:
				moveSpeed = BackwardSpeed;
				break;
			case TP_Animator.Direction.Left:
				moveSpeed = StrafingSpeed;
				break;
			case TP_Animator.Direction.Right:
				moveSpeed = StrafingSpeed;
				break;
			case TP_Animator.Direction.LeftForward:
				moveSpeed = ForwardSpeed;
				break;
			case TP_Animator.Direction.RightForward:
				moveSpeed = ForwardSpeed;
				break;
			case TP_Animator.Direction.LeftBackward:
				moveSpeed = BackwardSpeed;
				break;
			case TP_Animator.Direction.RightBackward:
				moveSpeed = BackwardSpeed;
				break;

		}
		
		if (slideDirection.magnitude > 0)
			moveSpeed = SlideSpeed;
		
		return moveSpeed;
	}
	
	void RollGravity (){
		Gravity *= -1;
	}
	
	void SetInSand ()
	{
		if (!GameObject.Find("SinkingMM(Clone)")){
			Instantiate (sinkingMesh, GameObject.Find("MainChar").transform.position, GameObject.Find("MainChar").transform.rotation);
			Destroy(GameObject.Find("MainChar"));
		}
	}

}

