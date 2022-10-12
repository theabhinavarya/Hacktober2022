# Importing OpenCV Library for basic image processing functions
import cv2
# Numpy for array related functions
import numpy as np
# Dlib for deep learning based Modules and face landmark detection
import dlib
# face_utils for basic operations of conversion
from imutils import face_utils

# Initializing the camera and taking the instance
cap = cv2.VideoCapture(0)

# Initializing the face detector and landmark detector
detector = dlib.get_frontal_face_detector()
predictor = dlib.shape_predictor("shape_predictor_68_face_landmarks.dat")

# status marking for current state
smiling=0
notSmiling=0
status=""
color = (0, 0, 0)

def compute(ptA, ptB):
	dist = np.linalg.norm(ptA - ptB)
	return dist

def smile (a,b,c,d):
	lips_width=compute(a,b)
	jaw_width= compute(c,d)
	ratio = lips_width/jaw_width
	# Evaluate ratio
	if ratio > 0.30 :		
		return 1
	else:
		return 0
		
while True:
	_, frame = cap.read()
	gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
	faces = detector(gray)

	# detected face in faces array
	for face in faces:
		x1 = face.left()
		y1 = face.top()
		x2 = face.right()
		y2 = face.bottom()

		face_frame = frame.copy()
		cv2.rectangle(frame, (x1, y1), (x2, y2), (0, 255, 0), 2)

		landmarks = predictor(gray, face)
		landmarks = face_utils.shape_to_np(landmarks)

		smiled=smile(landmarks[49],landmarks[55],landmarks[3],landmarks[15])

		if(smiled==1):
			smiling+=1
			if(smiling>8):
				status="Smiling :)"
				color = (0,255,0)

		else:
			notSmiling+=1
			if(notSmiling>8):
				status="Not Smiling :("
				color = (255,0,0)
			
		cv2.putText(frame, status, (100,100), cv2.FONT_HERSHEY_SIMPLEX, 1.2, color,3)

		for n in range(0, 68):
			(x,y) = landmarks[n]
			cv2.circle(frame, (x, y), 1, (255, 255, 255), -1)

	cv2.imshow("Frame", frame)

	# To exit the code                #cv2.waitkey(1) & 0xFF would return the ASCII code of q which is 113,& 0xFF will ensure 
	 		                          #only single  byte representation  of the key pressed is left 
	if cv2.waitKey(1) & 0xFF == ord('q'):
		break
cap.release()
cv2.destroyAllWindows()
# end_time=time.time()
