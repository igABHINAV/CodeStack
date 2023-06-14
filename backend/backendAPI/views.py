from .models import Note
from .serializers import SigninSerializer , Noteserializer
from rest_framework.decorators import api_view,permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
# Create your views here.

@api_view(['GET']) 
@permission_classes([IsAuthenticated])
def getdata(req) :
    n=Note.objects.filter(public=True)
    ns=Noteserializer(n,many=True)
    return Response(ns.data)

@api_view(['GET','POST'])
@permission_classes([IsAuthenticated])
def userfeed(req) :
    if req.method=='GET' :
        n=Note.objects.filter(user=req.user)
        ns=Noteserializer(n,many=True)
        return Response(ns.data)
    
    elif req.method=='POST' :
        s=Noteserializer(data=req.data)
        if s.is_valid() :
            s.save() 
            return Response(s.data)
        else :
            return Response({
                "error" :"Data is inappropriate"
            })

    


@api_view(['POST'])
def signup(req) :
    a=SigninSerializer(data=req.data)
    if a.is_valid() :
        a.save()
        return Response({ "Message": "User created successfully","User":a.data})
    else :
        return Response({"error":"some error occoured"})
    

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def userdeetails(req) :
    
    return Response({
        "name":req.user.username,
        "id":req.user.id
       
    })